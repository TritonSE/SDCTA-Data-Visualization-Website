const express = require("express");

const router = express.Router();

module.exports = router;

const UserModel = require("../models/user");
const tierServices = require("../services/tier");
const Model = require("../models/tier");

// Post Method
router.post("/create", async (req, res) => {
  try {
    const tier = await tierServices.getTier(req.body.tier);
    const data = new UserModel({
      username: req.body.username,
      email: req.body.email,
      tier: tier._id,
    });
    console.log(data);
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.send(`Document with ${data.username} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
