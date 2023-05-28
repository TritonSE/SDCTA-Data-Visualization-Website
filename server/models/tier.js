import mongoose from "mongoose";

const dataSchema = new mongoose.model(
  "Tier",
  new mongoose.Schema({
    name: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    level: {
      required: true,
      type: Number,
    },
    priceId: {
      required: true,
      type: String
    }
  })
);

export default dataSchema;
