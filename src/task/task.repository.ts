import {
  InjectPersistenceManager,
  PersistenceManager,
  QuerySpecification,
} from '@liberation-data/drivine';
import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectPersistenceManager('NEO')
    private readonly persistenceManager: PersistenceManager,
  ) {}

  async save(task: Task): Promise<void> {
    await this.persistenceManager.execute(
      new QuerySpecification(
        `
            MATCH (user:User) WHERE user.ID="${task.userID}"
            MERGE 
              (task:Task {ID: "${task.ID}", description: "${task.description}"})-[:BELONGS_TO]->(user)
        `,
      ),
    );
  }

  async getMany(): Promise<Task[]> {
    return await this.persistenceManager.query(
      new QuerySpecification<Task>(`
            MATCH (user:User)<-[:BELONGS_TO]-(task:Task) RETURN task
      `),
    );
  }
}
