import express from "express";
import Model from "../models/tier.js";
import {
  createTier,
  deleteTier,
  getTierByLevel,
  updateTier,
} from "../services/tier.js";

const router = express.Router();

// Post Method
router.post("/", async (req, res) => {
  try {
    const tier = await createTier(req.body.name, req.body.level);
    res.status(200).json(tier);
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

// Get by ID Method
router.get("/:level", async (req, res) => {
  try {
    const data = await getTierByLevel(req.params.level);
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
    const result = await updateTier(id, updatedData);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

// Delete by ID Method
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteTier(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    console.error(error);
  }
});

export default router;
