import mongoose from "mongoose";

const dataSchema = new mongoose.model(
  "Visualization",
  new mongoose.Schema({
    title: {
      required: true,
      unique: true,
      type: String,
    },
    analysis: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      unique: true,
      type: String,
    },
    hasCSV: {
      required: true,
      type: Boolean,
    },
  })
);

export default dataSchema;
