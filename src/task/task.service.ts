import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(
    @Inject(TaskRepository) private readonly taskRepository: TaskRepository,
  ) {}
  create(createTaskDto: CreateTaskDto): Promise<void> {
    const task = new Task(createTaskDto);
    return this.taskRepository.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.getMany();
  }
}
