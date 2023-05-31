import UserModel from "../models/user.js";
import { ServiceError } from "../errors.js";
import { getTierByName, getTierByPriceId } from "./tier.js";
import stripeSetup from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = stripeSetup(process.env.STRIPE_SECRET_KEY);

export async function getUserByEmail(email) {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw ServiceError.USER_NOT_FOUND;
  }
  try {
    const subscriptions = await stripe.subscriptions.list({ customer: user.stripe_id });
    const currentSubscription = subscriptions.data[0];
    let newTier;

    if (currentSubscription == null) {
      newTier = await getTierByName("Free");
    } else {
      newTier = await getTierByPriceId(currentSubscription.plan.id);
    }

    await updateUser(email, { tier: newTier });

    return user;
  } catch (error) {
    throw ServiceError.STRIPE_FAILURE.addContext(error);
  }
}

async function createStripeUser(name, email) {
  try {
    return await stripe.customers.create({
      name,
      email,
    });
  } catch (error) {
    throw ServiceError.STRIPE_FAILURE.addContext(error);
  }
}

export async function createUser(body) {
  try {
    const fullName = `${body.firstName} ${body.lastName}`;

    const customer = await createStripeUser(fullName, body.email);
    const tier = await getTierByName("Free");

    const data = new UserModel(body);
    data.stripe_id = customer.id;
    data.tier = tier;

    return await data.save();
  } catch (error) {
    throw ServiceError.INVALID_USER_RECEIVED.addContext(error);
  }
}

export async function updateUser(email, body) {
  try {
    const options = { new: true, returnNewDocument: true };

    if (body.tierName) {
      const tier = await getTierByName(body.tierName);
      body.tier = tier;
    }
    const data = await UserModel.findOneAndUpdate({ email }, body, options);
    return data;
  } catch (error) {
    throw ServiceError.INVALID_USER_RECEIVED.addContext(error);
  }
}

export async function deleteUser(id) {
  try {
    return await UserModel.findByIdAndDelete(id);
  } catch (error) {
    throw ServiceError.INVALID_USER_RECEIVED.addContext(error);
  }
}

export async function addStripeCard(body) {
  try {
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      billing_details: {
        address: {
          city: body.city,
          country: body.country,
          postal_code: body.postal_code
        },
        email: body.email,
        name: body.name,
        phone: body.phone
      },
      card: {
        number: body.number,
        exp_month: body.exp_month,
        exp_year: body.exp_year,
        cvc: body.cvc,
      },
    });

    const currentUser = await getUserByEmail(body.email);

    await stripe.paymentMethods.attach(paymentMethod.id, {
      customer: currentUser.stripe_id,
    });

    await stripe.customers.update(
      currentUser.stripe_id,
      { invoice_settings: { default_payment_method: paymentMethod.id } }
    );

    return "Success";
  } catch (error) {
    throw ServiceError.INVALID_CARD_RECEIVED.addContext(error);
  }
}

export async function chargeUser(body) {
  try {
    const tier = await getTierByName(body.tierName);
    const user = await getUserByEmail(body.email);

    const subscriptions = await stripe.subscriptions.list({ customer: user.stripe_id });
    const currentSubscription = subscriptions.data[0];

    if (currentSubscription == null) {
      await stripe.subscriptions.create({
        customer: user.stripe_id,
        cancel_at_period_end: false,
        proration_behavior: 'always_invoice',
        payment_behavior: "error_if_incomplete",
        items: [
          {
            price: tier.priceId
          },
        ]
      });
    } else {
      await stripe.subscriptions.update(currentSubscription.id, {
        cancel_at_period_end: false,
        proration_behavior: 'always_invoice',
        payment_behavior: "error_if_incomplete",
        items: [
          {
            id: currentSubscription.items.data[0].id,
            price: tier.priceId
          },
        ]
      });
    }
    await updateUser(body.email, { tierName: body.tierName });

    return "Success";
  } catch (error) {
    throw ServiceError.INVALID_CHARGE_RECEIVED.addContext(error);
  }
}

export async function getCardsByEmail(email) {
  try {
    const user = await getUserByEmail(email);

    const paymentMethods = await stripe.customers.listPaymentMethods(
      user.stripe_id,
      { type: 'card', limit: 5 }
    );

    const relevantInfo = paymentMethods.data.map((item) => {
      const cardDetails = {
        name: item.billing_details.name,
        brand: item.card.brand,
        last4: item.card.last4,
        exp_month: item.card.exp_month,
        exp_year: item.card.exp_year
      }
      return cardDetails;
    });

    return relevantInfo;
  } catch (error) {
    throw ServiceError.INVALID_USER_RECEIVED.addContext(error);
  }
}

export async function getDefaultCardByEmail(email) {
  const user = await getUserByEmail(email);

  const customer = await stripe.customers.retrieve(user.stripe_id);

  const paymentMethod = await stripe.paymentMethods.retrieve(
    customer.invoice_settings.default_payment_method
  );

  return paymentMethod.card.last4;
}
