import {
  InjectPersistenceManager,
  PersistenceManager,
  QuerySpecification,
} from '@liberation-data/drivine';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectPersistenceManager('NEO')
    readonly persistenceManager: PersistenceManager,
  ) {}

  async save(user: User): Promise<void> {
    await this.persistenceManager.execute(
      new QuerySpecification(
        `MERGE (u:User {id: "${user.id}", name: "${user.name}"} )`,
      ),
    );
  }

  async getMany(): Promise<User[]> {
    return this.persistenceManager.query(
      new QuerySpecification('MATCH (user:User) RETURN user'),
    );
  }
}
