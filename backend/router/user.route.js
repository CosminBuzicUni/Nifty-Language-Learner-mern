import express from "express";
import { check } from "express-validator";

const router = express.Router();

import { getUsers } from "../controllers/user.controller.js";
import { createUser } from "../controllers/user.controller.js";
import { updateUser } from "../controllers/user.controller.js";
import { deleteUser } from "../controllers/user.controller.js";

router.get("/", getUsers);
router.post(
  "/",
  [
    check("name").isLength({ min: 3 }).trim().escape(),
    check("email").isEmail().normalizeEmail(),
    check("password").isLength({ min: 8 }).trim().escape(),
  ],
  createUser
);
router.put(
  "/:id",
  [
    check("id").isMongoId(),
    check("name").isLength({ min: 3 }).trim().escape(),
    check("email").isEmail().normalizeEmail(),
    check("password").isLength({ min: 8 }).trim().escape(),
  ],
  updateUser
);
router.delete(
  "/:id",
  [check("id").isMongoId()],
  deleteUser
);

export default router;
