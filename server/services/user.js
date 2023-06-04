import UserModel from "../models/user.js";
import { ServiceError } from "../errors.js";
import { getTierByLevel } from "./tier.js";
import stripeSetup from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = stripeSetup(process.env.STRIPE_SECRET_KEY);

export async function getUserByEmail(email) {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw ServiceError.USER_NOT_FOUND;
  }
  return user;
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

    const tier = await getTierByLevel(body.tierLevel);
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
    const data = await UserModel.findOneAndUpdate({ email }, body, options);
    if (body.tierLevel) {
      const tier = await getTierByLevel(body.tierLevel);
      data.tier = tier;
    }
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
      card: {
        number: body.number,
        exp_month: body.exp_month,
        exp_year: body.exp_year,
        cvc: body.cvc,
      },
    });

    const currentUser = await getUserByEmail(body.email);

    return await stripe.paymentMethods.attach(paymentMethod.id, {
      customer: currentUser.stripe_id,
    });
  } catch (error) {
    throw ServiceError.INVALID_CARD_RECIEVED.addContext(error);
  }
}
