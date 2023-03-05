import Model from "../models/category.js";
import { ServiceError } from "../errors.js";

export async function getCategoryByName(name) {
  const category = await Model.find({ name });
  if (!category) {
    throw ServiceError.CATEGORY_NOT_FOUND;
  }
  return category[0];
}

export async function createCategory(name, visualizations) {
  const data = new Model({
    name,
    visualizations,
  });
  try {
    return await data.save();
  } catch (error) {
    throw ServiceError.INVALID_CATEGORY_RECEIVED.addContext(error);
  }
}
