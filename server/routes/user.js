import express from "express";
import UserModel from "../models/user.js";
import { getTier } from "../services/tier.js";

const router = express.Router();

// Post Method
router.post("/", async (req, res) => {
  try {
    const tier = await getTier(req.body.tier);
    const data = new UserModel({
      username: req.body.username,
      email: req.body.email,
      tier: tier._id,
    });
    console.log(data);
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by email Method
router.get("/:email", async (req, res, next) => {
  try {
    const data = await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Get by ID Method
router.get("/:id", async (req, res) => {
  try {
    const data = await UserModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update by ID Method
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await UserModel.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Delete by ID Method
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await UserModel.findByIdAndDelete(id);
    res.send(`Document with ${data.username} has been deleted..`);
  } catch (error) {
    next(error);
  }
});

export default router;
