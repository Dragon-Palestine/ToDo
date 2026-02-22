import Task from "../models/taskModel.js";
import User from "../models/userModel.js";
import mongoose from "mongoose";
import { deleteTaskServic, updateTaskServic } from "../services/taskService.js";
export const addTask = async (req, res, next) => {
  try {
    const { title, description, address } = req.body;
    const user = req.user;

    const task = await Task.create({
      title,
      description,
      address,
      userId: new mongoose.Types.ObjectId(user.id),
    });
    res
      .status(201)
      .json({ success: true, message: "Task added successfully", data: task });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid task ID");
    }
    const task = await Task.findById(id);
    if (!task) {
      throw new Error("Task not found");
    }
    const user = req.user;
    await deleteTaskServic(id, user.id);
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const { title, description, completed, address } = req.body;
    
    const data = {
        title,
        description,
        completed,
        address,
    };

    const updatedTask = await updateTaskServic(id, user.id, data);
    res
      .status(200)
      .json({
        success: true,
        message: "Task updated successfully",
        data: updatedTask,
      });
  } catch (error) {
    next(error);
  }
};
export const getTasks = async (req, res, next) => {
  try {
    const user = req.user;
    const tasks = await Task.find({ userId: user.id });
    res
      .status(200)
      .json({
        success: true,
        data: tasks,
        message: "Tasks retrieved successfully",
      });
  } catch (error) {
    next(error);
  }
};
