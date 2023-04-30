import Model from "../models/user.js";
import { ServiceError } from "../errors.js";
import { getTierByLevel } from "./tier.js";

export async function getUserByEmail(email) {
  const user = await Model.findOne({ email });
  if (!user) {
    throw ServiceError.USER_NOT_FOUND;
  }
  return user;
}

export async function createUser(username, email, tierLevel) {
  const tier = await getTierByLevel(tierLevel);
  const data = new Model({
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

export async function updateUser(email, body) {
  try {
    const options = { new: true, returnNewDocument: true };
    return await Model.findOneAndUpdate(email, body, options);
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
