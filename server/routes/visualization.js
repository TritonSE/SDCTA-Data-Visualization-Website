import express from "express";
import {
  getVisualizationByTitle,
  createVisualization,
  updateVisualization,
  deleteVisualization,
} from "../services/visualization.js";

const router = express.Router();

// Post Method
router.post("/", async (req, res) => {
  try {
    const vis = await createVisualization(
      req.body.title,
      req.body.analysis,
      req.body.link,
      req.body.csvLink
    );
    res.status(200).json(vis);
  } catch (error) {
    console.error(error);
  }
});

// Get by Title Method
router.get("/:title", async (req, res) => {
  try {
    const data = await getVisualizationByTitle(req.params.title);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

// Update by ID Method
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await updateVisualization(id, updatedData);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

// Delete by ID Method
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteVisualization(id);
    res.send(`Document with ${data.title} has been deleted..`);
  } catch (error) {
    console.error(error);
  }
});

export default router;
