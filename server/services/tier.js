import Model from "../models/tier.js";
import { ServiceError } from "../errors.js";

export async function getTierByLevel(level) {
  const tier = await Model.findOne({ level });
  if (!tier) {
    throw ServiceError.TIER_NOT_FOUND;
  }
  return tier;
}

export async function createTier(name, level) {
  const data = new Model({
    name,
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
