// This file's purpose handles the routes and delegates the logic to the service.
import type { Request, Response } from "express";
import {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../services/task-service";

export const getTasksHandler = async (req: Request, res: Response) => {
  const tasks = await getAllTask();
  res.json(tasks);
};

export const getTaskHandler = async (req: Request, res: Response) => {
  const task = await getTaskById(parseInt(req.params.id, 10));
  if (task) res.json(task);
  else res.status(404).json({ message: "Task not found" });
};

export const createTaskHandler = async (req: Request, res: Response) => {
  const task = await createTask(req.body);
  res.json(task);
};

export const updateTaskHandler = async (req: Request, res: Response) => {
  const task = await updateTask(parseInt(req.params.id, 10), req.body);
  if (task) res.json(task);
  else res.status(404).json({ message: "Task not found" });
};

export const deleteTaskHandler = async (req: Request, res: Response) => {
  const task = await deleteTask(parseInt(req.params.id, 10));
  res.json(task);
};
