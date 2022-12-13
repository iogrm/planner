import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnswerService } from './answer.service';
import { AnswerOutput } from './dto/answer.output';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';

@Resolver(() => AnswerOutput)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) {}

  @Mutation(() => AnswerOutput)
  createAnswer(
    @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
  ) {
    return this.answerService.create(createAnswerInput);
  }

  @Query(() => [AnswerOutput], { name: 'answers' })
  findAll() {
    return this.answerService.findAll();
  }

  @Query(() => [AnswerOutput], { name: 'answer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.answerService.findOne(id);
  }

  @Mutation(() => AnswerOutput)
  updateAnswer(
    @Args('updateAnswerInput') updateAnswerInput: UpdateAnswerInput,
  ) {
    return this.answerService.update(updateAnswerInput.id, updateAnswerInput);
  }

  @Mutation(() => AnswerOutput)
  removeAnswer(@Args('id', { type: () => Int }) id: number) {
    return this.answerService.remove(id);
  }
}
