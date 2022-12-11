import { UpdateUserInput } from './dto/update-user.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserInput) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUsersById(id: number) {
    return this.userRepository.findOneBy({ id });
    // ({ select: { id: id.toString() } });
  }

  findAll() {
    return this.userRepository.find();
  }

  update(id: number, UpdateUserInput: UpdateUserInput) {
    return this.userRepository.findOneBy({ id });
    // ({ select: { id: id.toString() } });
  }

  remove(id: number) {
    return this.userRepository.findOneBy({ id });
    // ({ select: { id: id.toString() } });
  }
}
