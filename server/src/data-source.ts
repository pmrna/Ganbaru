import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Task } from "./entity/task";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "testdb",
  synchronize: true,
  migrationsRun: true,
  logging: false,
  entities: [Task],
  migrations: ["src/migration/**/*.ts"],
});
