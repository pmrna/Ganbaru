// This file's purpose is to define routes and binds them to the handlers.

import express from "express";
import {
  createTaskHandler,
  deleteTaskHandler,
  getTaskHandler,
  getTasksHandler,
  updateTaskHandler,
} from "../controllers/task-controller";

const router = express.Router();

router.get("/", getTasksHandler);
router.get("/:id", getTaskHandler);
router.post("/", createTaskHandler);
router.put("/:id", updateTaskHandler);
router.delete("/:id", deleteTaskHandler);

export default router;
