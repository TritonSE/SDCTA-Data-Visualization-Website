import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import tierRouter from "./routes/tier.js";
import userRouter from "./routes/user.js";
import categoryRouter from "./routes/category.js";
import visRouter from "./routes/visualization.js";

dotenv.config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const errorHandler = (err, req, res, next) => {
  if (!err) return;
  if (!(err instanceof CustomError)) {
    // All unhandled errors are marked as unknown internal errors
    const e = InternalError.UNKNOWN.addContext(err.stack);
    res.status(e.statusCode).json({
      message: e.format(true),
      error: true,
    });
  } else if (err instanceof InternalError) {
    // Internal Error Logging
    console.error(err.format(false));
    res.status(err.statusCode).json({
      message: err.format(true),
      error: true,
    });
  }
};

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tier", tierRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/visualization", visRouter);

app.use(errorHandler);

app.listen(3001, () => {
  console.log(`Server Started at ${3001}`);
});
