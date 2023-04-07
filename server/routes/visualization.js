import express from "express";
import {
  getVisualizationByTitle,
  createVisualization,
  updateVisualization,
  getAllVisualizations,
  deleteVisualization,
} from "../services/visualization.js";

const router = express.Router();

// Post Method
router.post("/", async (req, res, next) => {
  try {
    const vis = await createVisualization(
      req.body.title,
      req.body.analysis,
      req.body.link,
      req.body.csvLink
    );
    res.status(200).json(vis);
  } catch (error) {
    next(error);
  }
});

// Get all Method
router.get("/getAll", async (req, res, next) => {
  try {
    const data = await getAllVisualizations();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Get by Title Method
router.get("/:title", async (req, res, next) => {
  try {
    const data = await getVisualizationByTitle(req.params.title);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Update by ID Method
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await updateVisualization(id, updatedData);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Delete by ID Method
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await deleteVisualization(id);
    res.send(`Document with ${data.title} has been deleted.`);
  } catch (error) {
    next(error);
  }
});

export default router;
