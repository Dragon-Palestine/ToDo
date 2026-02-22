import express from "express";
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";
import { validate } from "../middlewares/validationResult.js";
import authMiddleware from "../middlewares/authMiddleWares.js";
import { autharizationMiddleWares } from "../middlewares/authrizationMiddleWare.js";
import {
  addTaskValidation,
  updateTaskValidation,
  taskIdValidation,
} from "../middlewares/taskValidator.js";

const router = express.Router();

router.get("/list", authMiddleware, autharizationMiddleWares, getTasks);
router.post(
  "/add",
  authMiddleware,
  autharizationMiddleWares,
  addTaskValidation,
  validate,
  addTask,
);
router.put(
  "/update/:id",
  authMiddleware,
  autharizationMiddleWares,
  updateTaskValidation,
  validate,
  updateTask,
);
router.delete(
  "/remove/:id",
  authMiddleware,
  autharizationMiddleWares,
  taskIdValidation,
  validate,
  deleteTask,
);

export default router;
