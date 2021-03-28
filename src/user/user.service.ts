import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly repository: UserRepository,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<void> {
    const user = new User(createUserDto);
    this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.getMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user #${updateUserDto}`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
