import express from "express";
import upload from "multer";
import {
  getVisualizationByTitle,
  createVisualization,
  updateVisualization,
  getAllVisualizations,
  deleteVisualization,
  downloadCSVFileByTitle,
} from "../services/visualization.js";

const router = express.Router();

// Post Method
router.post("/", upload().any(), async (req, res, next) => {
  let csvFile;
  if (req.files.length) {
    csvFile = req.files[0].buffer;
  }
  try {
    const vis = await createVisualization(
      req.body.title,
      req.body.analysis,
      req.body.link,
      csvFile
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

// Get all Method
router.get("/download/:title", async (req, res, next) => {
  try {
    const path = await downloadCSVFileByTitle(req.params.title);
    res.download(path);
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
