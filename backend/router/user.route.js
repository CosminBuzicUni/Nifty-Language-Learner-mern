import express from "express";

const router = express.Router();

import { getUsers } from "../controllers/user.controller.js";
import { createUser } from "../controllers/user.controller.js";
import { updateUser } from "../controllers/user.controller.js";
import { deleteUser } from "../controllers/user.controller.js";

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
