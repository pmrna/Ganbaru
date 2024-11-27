import express from "express";
import { AppDataSource } from "./data-source";
import taskRoutes from "./routes/task-routes";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    app.use("/tasks", taskRoutes);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) =>
    console.error("Error during Data Source initialization", error)
  );
