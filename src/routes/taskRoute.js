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
router.use(authMiddleware,autharizationMiddleWares);

router.get("/list", getTasks);
router.post(
  "/add",
  addTaskValidation,
  validate,
  addTask,
);
router.put(
  "/update/:id",
  updateTaskValidation,
  validate,
  updateTask,
);
router.delete(
  "/remove/:id",
  taskIdValidation,
  validate,
  deleteTask,
);

export default router;
