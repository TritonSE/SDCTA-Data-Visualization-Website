import express from "express";
import Model from "../models/category.js";
import { getCategoryByName } from "../services/category.js";
import { getVisualizationByTitle } from "../services/visualization.js";

const router = express.Router();

// Post Method
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    visualizations: req.body.visualizations,
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

// Get by Name Method
router.get("/getOne/:name", async (req, res) => {
  try {
    const data = await getCategoryByName(req.params.name);
    data.visualizations = await Promise.all(
      data.visualizations.map(getVisualizationByTitle)
    );
    res.json(data);
  } catch (e) {
    console.error(e);
    return;
  }
});

// Update by ID Method
router.patch("/update/:id", async (req, res) => {
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
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
