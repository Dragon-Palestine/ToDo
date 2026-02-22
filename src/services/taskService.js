import Task from "../models/taskModel.js";

export const deleteTaskServic = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({ _id: taskId, userId: userId });

  if (!task) {
    const taskExists = await Task.findById(taskId);
    if (taskExists) {
      throw new Error("Not authorized to delete this task");
    } else {
      throw new Error("Task not found");
    }
  }
};

export const updateTaskServic = async (taskId, userId, data) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: taskId,
      userId,
    },
    data,
    { new: true },
  );

  if (!task) {
    throw new Error("Task not found or not authorized");
  }

  return task;
};
