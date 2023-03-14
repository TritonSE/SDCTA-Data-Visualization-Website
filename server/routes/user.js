import express from "express";
import {
  createUser,
  deleteUser,
  getUserByEmail,
  updateUser,
} from "../services/user.js";

const router = express.Router();

// Post Method
router.post("/", async (req, res, next) => {
  try {
    const tier = await createUser(req.body.name, req.body.email, req.body.tier);
    res.status(200).json(tier);
  } catch (error) {
    next(error);
  }
});

// Get by email Method
router.get("/:email", async (req, res, next) => {
  try {
    const data = await getUserByEmail(req.params.email);
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
    const result = await updateUser(id, updatedData);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Delete by ID Method
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await deleteUser(id);
    res.send(`Document with ${data.title} has been deleted.`);
  } catch (error) {
    next(error);
  }
});

export default router;
