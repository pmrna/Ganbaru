import "reflect-metadata";

import { IsNotEmpty, Length } from "class-validator";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum TaskStatus {
  todo = "todo",
  in_progress = "in_progress",
  done = "done",
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @Column("text")
  description: string;

  @Column({
    type: "enum",
    enum: TaskStatus,
    default: TaskStatus.todo,
  })
  @Index()
  status: TaskStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
