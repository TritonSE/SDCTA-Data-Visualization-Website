import Model from "../models/category.js";
import { InternalError, ServiceError } from "../errors.js";

export async function getCategoryByName(name) {
  const category = await Model.findOne({ name });
  if (!category) {
    throw ServiceError.CATEGORY_NOT_FOUND;
  }
  return category;
}

export async function getAllCategories() {
  try {
    const category = await Model.find();
    return category;
  } catch (error) {
    throw InternalError.UNKNOWN;
  }
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

export async function updateCategory(id, body) {
  try {
    const options = { new: true };
    return await Model.findByIdAndUpdate(id, body, options);
  } catch (error) {
    throw ServiceError.INVALID_CATEGORY_RECEIVED.addContext(error);
  }
}

export async function deleteCategory(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (error) {
    throw ServiceError.INVALID_CATEGORY_RECEIVED.addContext(error);
  }
}
