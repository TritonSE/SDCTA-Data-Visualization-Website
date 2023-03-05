import Model from "../models/category.js";
import { ServiceError, InternalError } from "../errors.js";

export async function getCategoryByName(name) {
  const category = await Model.find({ name });
  if (!category) {
    throw ServiceError.CATEGORY_NOT_FOUND;
  }
  return data[0];
}
