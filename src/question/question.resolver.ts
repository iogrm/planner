import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { QuestionOutput } from './dto/question.output';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';

@Resolver(() => QuestionOutput)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Mutation(() => QuestionOutput, { name: 'createQuestion' })
  createQuestion(
    @Args('createQuestionInput') createQuestionInput: CreateQuestionInput,
  ) {
    return this.questionService.create(createQuestionInput);
  }

  @Mutation(() => [QuestionOutput], { name: 'createQuestions' })
  createQuestions(
    @Args('createQuestionsInput', { type: () => [CreateQuestionInput] })
    createQuestionsInput: [CreateQuestionInput],
  ) {
    return this.questionService.createSome(createQuestionsInput);
  }

  @Query(() => [QuestionOutput], { name: 'questions' })
  findAll() {
    return this.questionService.findAll();
  }

  @Query(() => QuestionOutput, { name: 'question' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.questionService.findOne(id);
  }

  @Mutation(() => QuestionOutput)
  updateQuestion(
    @Args('updateQuestionInput') updateQuestionInput: UpdateQuestionInput,
  ) {
    return this.questionService.update(
      updateQuestionInput.id,
      updateQuestionInput,
    );
  }

  @Mutation(() => QuestionOutput)
  removeQuestion(@Args('id', { type: () => Int }) id: number) {
    return this.questionService.remove(id);
  }
}
