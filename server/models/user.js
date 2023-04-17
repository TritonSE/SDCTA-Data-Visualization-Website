import mongoose from "mongoose";

const dataSchema = new mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      required: true,
      unique: true,
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
  })
);

export default dataSchema;
