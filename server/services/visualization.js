import Model from "../models/visualization.js";
import { ServiceError } from "../errors.js";

export async function getVisualizationByTitle(title) {
  const vis = await Model.find({ title });
  if (!vis) {
    throw ServiceError.VIS_NOT_FOUND;
  }
  return vis[0];
}
