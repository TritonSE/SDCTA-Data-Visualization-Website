import VisModel from "../models/visualization.js";
import FileModel from "../models/files.js";
import { ServiceError, InternalError } from "../errors.js";
import fs from "fs";

export async function getVisualizationByTitle(title) {
  const vis = await VisModel.findOne({ title });
  if (!vis) {
    throw ServiceError.VIS_NOT_FOUND;
  }
  return vis;
}

export async function downloadCSVFileByTitle(title) {
  const vis = await FileModel.findOne({ title });
  if (!vis) {
    throw ServiceError.VIS_NOT_FOUND;
  }
  fs.writeFileSync("./" + title + ".csv", vis.csvFile);
  return "./" + title + ".csv";
}

export async function createVisualization(title, analysis, link, csvFile) {
  const data = new VisModel({
    title,
    analysis,
    link,
    hasCSV: csvFile !== undefined,
  });
  try {
    if (csvFile) {
      const file = new FileModel({ title, csvFile });
      await file.save();
    }
    return await data.save();
  } catch (error) {
    throw ServiceError.INVALID_VISUALIZATION_RECEIVED.addContext(error);
  }
}

export async function getAllVisualizations() {
  try {
    const visualizations = await VisModel.find();
    return visualizations;
  } catch (error) {
    throw InternalError.UNKNOWN;
  }
}

export async function updateVisualization(id, body) {
  try {
    const options = { new: true };
    return await VisModel.findByIdAndUpdate(id, body, options);
  } catch (error) {
    throw ServiceError.INVALID_VISUALIZATION_RECEIVED.addContext(error);
  }
}

export async function deleteVisualization(id) {
  try {
    return await VisModel.findByIdAndDelete(id);
  } catch (error) {
    throw ServiceError.INVALID_VISUALIZATION_RECEIVED.addContext(error);
  }
}
