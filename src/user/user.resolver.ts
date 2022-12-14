import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserOutput } from './dto/user.output';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver(() => UserOutput)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Subscription((returns) => UserOutput, {
    name: 'userAdded',
  })
  subscribeToCommentAdded() {
    return pubSub.asyncIterator('userAdded');
  }

  @Mutation(() => UserOutput)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const newUser = this.userService.createUser(createUserInput);
    pubSub.publish('userAdded', { userAdded: newUser });
    return newUser;
  }

  @Query(() => [UserOutput], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => UserOutput, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findUserById(id);
  }

  @Mutation(() => UserOutput)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput);
  }

  @Mutation(() => UserOutput)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
