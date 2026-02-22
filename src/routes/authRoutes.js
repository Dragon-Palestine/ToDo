import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import {
  registerValidation,
  loginValidation,
} from "../middlewares/authValidator.js";
import { validate } from "../middlewares/validationResult.js";

const router = express.Router();

router.post("/register", registerValidation, validate, registerUser);
router.post("/login", loginValidation, validate, loginUser);

export default router;
