import express from "express";
import dotenv from "dotenv";
import { connect, mongo } from "mongoose";
import { connectDB } from "./config/db.js";
import User from "./models/user.model.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.post("/api/user", async (req, res) => {
    const user = req.body;

    if(!user.name || !user.email || !user.password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({success: true, data: newUser});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.put("/api/user/:id", async (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    if(mongoose.Types.ObjectId.isValid(userId) === false) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    if(!updatedUser.name || !updatedUser.email || !updatedUser.password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

app.delete("/api/user/:id", async (req, res) => {
    const userId = req.params.id;

    try{
        await User.findByIdAndDelete(userId);
        res.status(200).json({ success: true, message: "User deleted successfully" });
    }catch (error) {
        res.status(404).json({ success: false, message: "User not found" });
    }
});

app.listen(5000, () => {
    connectDB();
  console.log("Server is running on port 5000!");
});