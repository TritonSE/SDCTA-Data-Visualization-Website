import mongoose from "mongoose";

const dataSchema = new mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: {
      required: true,
      unique: false,
      type: String,
    },
    lastName: {
      required: true,
      unique: false,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    tier: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Tier",
    },
    stripe_id: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    country: {
      type: String,
    },
  })
);

export default dataSchema;
