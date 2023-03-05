import express from "express";
import Model from "../models/visualization.js";
import { getVisualizationByTitle } from "../services/visualization.js";

const router = express.Router();

// Post Method
router.post("/", async (req, res) => {
  const data = new Model({
    title: req.body.title,
    analysis: req.body.analysis,
    link: req.body.link,
    csvLink: req.body.csvLink,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by Title Method
router.get("/:title", async (req, res) => {
  try {
    const data = await getVisualizationByTitle(req.params.title);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update by ID Method
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete by ID Method
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.title} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
