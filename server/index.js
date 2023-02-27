require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();
const routesTier = require("./routes/tier");
const routesUser = require("./routes/user");
const routesCategory = require("./routes/category");
const routesVisualization = require("./routes/visualization");

app.use(express.json());
app.use("/api/tier", routesTier);
app.use("/api/user", routesUser);
app.use("/api/category", routesCategory);
app.use("/api/visualization", routesVisualization);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
