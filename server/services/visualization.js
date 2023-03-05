import Model from "../models/visualization.js";

export async function getVisualizationByTitle(title) {
  try {
    const data = await Model.find({ title });
    return data[0];
  } catch (error) {
    res.status(500).json({ message: error.message });
    return {};
  }
}
