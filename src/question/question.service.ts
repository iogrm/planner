import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}
  create(createQuestionInput: CreateQuestionInput) {
    const question = this.questionRepository.create(createQuestionInput);
    return this.questionRepository.save(question);
  }

  createSome(createQuestionInput: [CreateQuestionInput]) {
    const questions = this.questionRepository.create(createQuestionInput);
    return this.questionRepository.save(questions);
  }

  findAll() {
    return this.questionRepository.find();
  }

  findOne(id: number) {
    return this.questionRepository.findOneBy({ id });
  }

  async update(id: number, updateQuestionInput: UpdateQuestionInput) {
    const question = await this.questionRepository.findOneBy({ id });
    question.text = updateQuestionInput.text;
    question.traitPlus = updateQuestionInput.traitPlus;
    question.traitMinus = updateQuestionInput.traitMinus;
    return this.questionRepository.save(question);
  }

  remove(id: number) {
    return this.questionRepository.delete(id);
  }
}
