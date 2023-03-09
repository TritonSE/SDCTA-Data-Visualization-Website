import Model from "../models/visualization.js";
import { ServiceError } from "../errors.js";

export async function getVisualizationByTitle(title) {
  const vis = await Model.findOne({ title });
  console.log(vis);
  if (!vis) {
    throw ServiceError.VIS_NOT_FOUND;
  }
  return vis;
}

export async function getVisualizationByID(id) {
  const vis = await Model.findOne({ id });
  console.log(vis);
  if (!vis) {
    throw ServiceError.VIS_NOT_FOUND;
  }
  return vis;
}

export async function createVisualization(title, analysis, link, csvLink) {
  const data = new Model({
    title,
    analysis,
    link,
    csvLink,
  });
  try {
    return await data.save();
  } catch (error) {
    throw ServiceError.INVALID_VISUALIZATION_RECEIVED.addContext(error);
  }
}

export async function getAllVisualizations() {
  try {
    const visualizations = await Model.find();
    return visualizations;
  } catch (error) {
    throw InternalError.UNKNOWN;
  }
}

export async function updateVisualization(id, body) {
  try {
    const options = { new: true };
    return await Model.findByIdAndUpdate(id, body, options);
  } catch (error) {
    throw ServiceError.INVALID_VISUALIZATION_RECEIVED.addContext(error);
  }
}

export async function deleteVisualization(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (error) {
    throw ServiceError.INVALID_VISUALIZATION_RECEIVED.addContext(error);
  }
}
