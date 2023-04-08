import mongoose from "mongoose";

const dataSchema = new mongoose.model(
  "Files",
  new mongoose.Schema({
    title: {
      required: true,
      unique: true,
      type: String,
    },
    csvFile: {
      required: true,
      type: Buffer,
    },
  })
);

export default dataSchema;
