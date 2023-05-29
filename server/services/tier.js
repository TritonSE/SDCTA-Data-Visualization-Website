import Model from "../models/tier.js";
import { ServiceError, InternalError } from "../errors.js";

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
  return tier;
}

export async function createTier(name, type, level) {
  const data = new Model({
    name,
    type,
    level
  });
  try {
    return await data.save();
  } catch (error) {
    throw ServiceError.INVALID_TIER_RECEIVED.addContext(error);
  }
}

export async function getAllTiers() {
  try {
    const tiers = await Model.find();
    return tiers;
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
