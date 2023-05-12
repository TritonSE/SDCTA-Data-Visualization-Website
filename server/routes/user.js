import express from "express";
import Model from "../models/user.js";

const router = express.Router();
// Post Method
router.post("/", async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json(user);
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
// Update by email Method
router.patch("/:email", async (req, res, next) => {
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
    const result = await updateUser(email, updatedData);
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
    res.send(`Document with ${data.username} has been deleted..`);
  } catch (error) {
    next(error);
  }
});
export default router;
