import express from "express";
import Model from "../models/category.js";
import { getCategoryByName, createCategory } from "../services/category.js";
import { getVisualizationByTitle } from "../services/visualization.js";

const router = express.Router();

// Post Method
router.post("/post", async (req, res) => {
  try {
    const category = await createCategory(
      req.body.name,
      req.body.visualizations
    );
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
  }
});

// Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

// Get by Name Method
router.get("/", async (req, res) => {
  try {
    const data = await getCategoryByName(req.params.name);
    data.visualizations = await Promise.all(
      data.visualizations.map(getVisualizationByTitle)
    );
    res.json(data);
  } catch (e) {
    console.error(e);
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
    console.error(error);
  }
});

// Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    console.error(error);
  }
});

export default router;
