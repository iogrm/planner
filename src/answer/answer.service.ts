import { Question } from 'src/question/entities/question.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { allScalars } from 'src/scalar';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}
  create(createAnswerInput: CreateAnswerInput) {
    const q = new Question();
    q.id = createAnswerInput.questionId;
    const a = new Answer();
    a.percentage = createAnswerInput.percentage;
    a.question = q;
    a.userId = createAnswerInput.userId;
    const answer = this.answerRepository.create(a);
    return this.answerRepository.save(answer);
  }

  findAll() {
    return this.answerRepository.find();
  }

  findOne(id: number) {
    return this.answerRepository.findOneBy({ id });
  }

  update(id: number, updateAnswerInput: UpdateAnswerInput) {
    return `This action updates a #${id} answer`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }
}
