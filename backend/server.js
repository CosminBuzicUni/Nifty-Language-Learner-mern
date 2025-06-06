import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./router/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(PORT, () => {
    connectDB();
  console.log("Server is running on port 5000!");
});