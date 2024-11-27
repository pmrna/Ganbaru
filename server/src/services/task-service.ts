// This file's purpose is to handle the logic for interacting with the database.

import { AppDataSource } from "../data-source";
import { Task } from "../entity/task";

const taskRepository = AppDataSource.getRepository(Task);

export const getAllTask = async () => {
  return await taskRepository.find();
};

export const getTaskById = async (id: number) => {
  return await taskRepository.findOneBy({ id });
};

export const createTask = async (taskData: Partial<Task>) => {
  const task = taskRepository.create(taskData);
  return await taskRepository.save(task);
};

export const updateTask = async (id: number, taskData: Partial<Task>) => {
  const task = await taskRepository.findOneBy({ id });
  if (task) {
    taskRepository.merge(task, taskData);
    return await taskRepository.save(task);
  }
  return null;
};

export const deleteTask = async (id: number) => {
  return await taskRepository.delete({ id });
};
