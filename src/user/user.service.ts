import { UpdateUserInput } from './dto/update-user.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserInput) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id });
    // ({ select: { id: id.toString() } });
  }

  findAll() {
    return this.userRepository.find();
  }

  async update(updateUserInput: UpdateUserInput) {
    const user = await this.userRepository.findOneBy({
      id: updateUserInput.id,
    });
    user.mbti = updateUserInput.mbti;
    this.userRepository.save(user);
    return user;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
