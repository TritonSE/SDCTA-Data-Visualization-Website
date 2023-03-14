import Model from "../models/user.js";
import { InternalError, ServiceError } from "../errors.js";

export async function getUserByEmail(email) {
  const user = await Model.findOne({ email });
  if (!user) {
    throw ServiceError.USER_NOT_FOUND;
  }
  return user;
}

export async function createUser(username, email, tier_level) {
  const tier = await tierServices.getTier(tier_level);
  const data = new UserModel({
    username,
    email,
    tier,
  });
  try {
    return await data.save();
  } catch (error) {
    throw ServiceError.INVALID_USER_RECEIVED.addContext(error);
  }
}

export async function updateUser(id, body) {
  try {
    const options = { new: true };
    return await Model.findByIdAndUpdate(id, body, options);
  } catch (error) {
    throw ServiceError.INVALID_USER_RECEIVED.addContext(error);
  }
}

export async function deleteUser(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (error) {
    throw ServiceError.INVALID_USER_RECEIVED.addContext(error);
  }
}
