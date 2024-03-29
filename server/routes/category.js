import express from "express";
import {
  getCategoryByName,
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../services/category.js";
import { getVisualizationByTitle } from "../services/visualization.js";

const router = express.Router();

// Post Method
router.post("/", async (req, res, next) => {
  try {
    const category = await createCategory(
      req.body.name,
      req.body.visualizations
    );
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

// Get all Method
router.get("/getAll", async (req, res, next) => {
  try {
    const data = await getAllCategories();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Get by Name Method
router.get("/:name", async (req, res, next) => {
  try {
    const data = await getCategoryByName(req.params.name);
    data.visualizations = await Promise.all(
      data.visualizations.map(getVisualizationByTitle)
    );
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Update by ID Method
router.patch("/:id", async (req, res, next) => {
  try {
    const result = await updateCategory(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Delete by ID Method
router.delete("/:id", async (req, res, next) => {
  try {
    const data = await deleteCategory(req.params.id);
    res.send(`Document with ${data.name} has been deleted.`);
  } catch (error) {
    next(error);
  }
});

export default router;
