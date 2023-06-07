import Model from "../models/tier.js";
import { ServiceError, InternalError } from "../errors.js";
import stripeSetup from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = stripeSetup(process.env.STRIPE_SECRET_KEY);

export async function getPriceOfTier(name) {
  const tier = await Model.findOne({ name });
  const price = await stripe.prices.retrieve(tier.priceId);
  if (!tier) {
    throw ServiceError.TIER_NOT_FOUND;
  }
  return price.unit_amount / 100;
}

export async function getTierByName(name) {
  const tier = await Model.findOne({ name });
  if (!tier) {
    throw ServiceError.TIER_NOT_FOUND;
  }
  return tier;
}

export async function getTierByPriceId(priceId) {
  const tier = await Model.findOne({ priceId });

  if (!tier) {
    throw ServiceError.TIER_NOT_FOUND;
  }
  // updateTier(tier.)
  return tier;
}

export async function createTier(name, type, level) {
  const data = new Model({
    name,
    type,
    level,
  });
  try {
    return await data.save();
  } catch (error) {
    throw ServiceError.INVALID_TIER_RECEIVED.addContext(error);
  }
}

export async function getAllTiers() {
  try {
    const products = await stripe.products.list({ active: true, limit: 20 });
    const prices = await stripe.prices.list({ active: true, limit: 20 });
    console.log(prices);
    const relevantInfo = await Promise.all(
      products.data.map(async (item) => {
        const price = await stripe.prices.retrieve(item.default_price);
        const productDetails = {
          name: item.name,
          price: price.unit_amount / 100,
        };
        return productDetails;
      })
    );
    return relevantInfo;
  } catch (error) {
    throw InternalError.UNKNOWN;
  }
}

export async function updateTier(id, body) {
  try {
    const options = { new: true };
    return await Model.findByIdAndUpdate(id, body, options);
  } catch (error) {
    throw ServiceError.INVALID_TIER_RECEIVED.addContext(error);
  }
}

export async function deleteTier(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (error) {
    throw ServiceError.INVALID_TIER_RECEIVED.addContext(error);
  }
}
