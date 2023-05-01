import mongoose from "mongoose";

const dataSchema = new mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
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
