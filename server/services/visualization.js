import Model from "../models/visualization.js";
import { ServiceError, InternalError } from "../errors.js";
const http = require('http')
const fs = require('fs')
var Binary = mongo.Binary

export async function getVisualizationByTitle(title) {
  console.log(title);
  const vis = await Model.findOne({ title : title });
  console.log(vis);
  if (!vis) {
    throw ServiceError.VIS_NOT_FOUND;
  }
  return vis;
}

export async function downloadCSVFileByTitle(title){
  console.log(title);
  const vis = await Model.findOne({ title });
  if (!vis) {
    throw ServiceError.VIS_NOT_FOUND;
  }
  fs.writeFileSync("./" + title + ".csv", vis.csvFile);
}

export async function createVisualization(title, analysis, link, csvLink) {
  csvFile = new Binary(fs.readFileSync(csvLink));
  const data = new Model({
    title,
    analysis,
    link,
    csvLink,
    csvFile
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
