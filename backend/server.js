import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./router/user.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(5000, () => {
    connectDB();
  console.log("Server is running on port 5000!");
});