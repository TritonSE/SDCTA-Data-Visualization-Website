import express from "express";
import {
  createUser,
  updateUser,
  getUserByEmail,
  deleteUser,
  addStripeCard,
  chargeUser,
  getCardsByEmail,
  getDefaultCardByEmail,
  removeCardByEmail,
  setDefaultCardByEmail,
} from "../services/user.js";
const router = express.Router();

// Set Default Card Post Method

// Get Default Card Get Method
router.get("/getdefaultcard/:email", async (req, res, next) => {
  try {
    const data = await getDefaultCardByEmail(req.params.email);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// All Cards Get Method
router.get("/getcards/:email", async (req, res, next) => {
  try {
    const data = await getCardsByEmail(req.params.email);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Add Card Post Method
router.post("/addCard", async (req, res, next) => {
  try {
    const result = await addStripeCard(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Charge Card Post Method
router.post("/chargeuser", async (req, res, next) => {
  try {
    const result = await chargeUser(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Update Card Post Method
router.post("/updateDefault", async (req, res, next) => {
  try {
    const result = await setDefaultCardByEmail(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Delete Card Post Method
router.post("/deleteCard", async (req, res, next) => {
  try {
    const result = await removeCardByEmail(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Delete Card Post Method
router.post("/deleteCard", async (req, res, next) => {
  try {
    const result = await removeCardByEmail(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// Create User Post Method
router.post("/", async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    delete user.stripe_id;
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// Get by email Method
router.get("/:email", async (req, res, next) => {
  try {
    const data = await getUserByEmail(req.params.email);
    delete data.stripe_id;
    res.json(data);
  } catch (error) {
    next(error);
  }
});
// Update by email Method
router.patch("/:email", async (req, res, next) => {
  try {
    const email = req.params.email;
    const updatedData = req.body;
    const result = await updateUser(email, updatedData);
    delete result.stripe_id;
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
