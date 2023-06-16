import express from "express";
import {
  createTier,
  deleteTier,
  getAllTiers,
  getTierByLevel,
  updateTier,
} from "../services/tier.js";

const router = express.Router();

// Post Method
router.post("/", async (req, res, next) => {
  try {
    const tier = await createTier(req.body.name, req.body.level);
    res.status(200).json(tier);
  } catch (error) {
    next(error);
  }
});

// Get all Method
router.get("/getAll", async (req, res, next) => {
  try {
    const data = await getAllTiers();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Get by ID Method
router.get("/:level", async (req, res, next) => {
  try {
    const data = await getTierByLevel(req.params.level);
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
    const result = await updateTier(id, updatedData);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Delete by ID Method
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await deleteTier(id);
    res.send(`Document with ${data.name} has been deleted.`);
  } catch (error) {
    next(error);
  }
});

export default router;
