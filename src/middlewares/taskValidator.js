import { body, param } from "express-validator";
import { validId } from "../utils/helpers.js";
import Task from "../models/taskModel.js";

export const addTaskValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("address").notEmpty().withMessage("Address is required"),
];

export const updateTaskValidation = [
  param("id").custom(async (id) => {
    if (!validId(id)) {
      throw new Error("Invalid Task ID");
    }
    const taskExists = await Task.findById(id);
    if (!taskExists) {
      throw new Error("Task does not exist");
    }
    return true;
  }),
  body("title").optional().notEmpty().withMessage("Title cannot be empty"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Description cannot be empty"),
  body("address").optional().notEmpty().withMessage("Address cannot be empty"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean"),
];

export const taskIdValidation = [
  param("id").custom((id) => {
    if (!validId(id)) {
      throw new Error("Invalid Task ID");
    }
    return true;
  }),
];
