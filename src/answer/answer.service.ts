import { UserService } from 'src/user/user.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/question/entities/question.entity';
import { Mbti } from 'src/type/mbti_string';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './dto/create-answer.input';
import { Answer } from './entities/answer.entity';
import { NumberString } from 'src/type/number_string';
import { UpdateUserInput } from 'src/user/dto/update-user.input';
import { MaxDate } from 'class-validator';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,

    private readonly userService: UserService,
  ) {}
  create(createAnswerInput: CreateAnswerInput) {
    const answer = new Answer();
    answer.percentage = createAnswerInput.percentage;
    answer.time = new Date();

    const question = new Question();
    question.id = createAnswerInput.questionId;
    answer.question = question;

    const user = new User();
    user.id = createAnswerInput.userId;
    answer.user = user;

    const a = this.answerRepository.create(answer);
    return this.answerRepository.save(a);
  }

  async findAll() {
    const answers = this.answerRepository.find({
      relations: {
        user: true,
        question: true,
      },
    });
    return answers;
  }

  async findOne(id: number) {
    const answer = await this.answerRepository.findOne({
      relations: {
        user: true,
        question: true,
      },
      where: { id },
    });
    return answer;
  }

  remove(id: number) {
    return this.answerRepository.delete(id);
  }

  findAllAnswersByUser(userId: number): Promise<Answer[]> {
    return this.answerRepository.find({
      relations: {
        user: true,
        question: true,
      },
      where: {
        user: { id: userId },
      },
    });
  }

  findValidAnswersByUser(userId: number) {
    return this.answerRepository.find({
      relations: {
        user: true,
        question: true,
      },
      where: {
        user: { id: userId },
      },
    });
  }

  async getMbti(userId: number): Promise<Mbti> {
    const answers = await this.findValidAnswersByUser(userId);
    const mbti = this.analyseAnswers(answers);
    this.updateMbtiOfUser(userId, mbti);
    return mbti;
  }

  async updateMbtiOfUser(userId: number, mbti: Mbti) {
    const user = await this.userService.findUserById(userId);
    const updateUser: UpdateUserInput = {
      id: user.id,
      username: user.username,
      password: user.password,
      email: user.email,
      nationalId: NumberString.mk(user.nationalId),
      mbti: mbti,
    };
    this.userService.update(updateUser);
  }

  private analyseAnswers(answers: Answer[]): Mbti {
    const traits = {
      i: 0,
      e: 0,
      n: 0,
      s: 0,
      t: 0,
      f: 0,
      p: 0,
      j: 0,
      x: 0,
    };

    answers.forEach((answer) => {
      const trait =
        answer.percentage > 0
          ? answer.question.traitPlus
          : answer.question.traitMinus;
      traits[trait.toString()] += Math.abs(answer.percentage);
    });
    return Mbti.mk(this.getMbtiByTraits(traits));
  }

  private getMbtiByTraits(traits) {
    let result = '';
    result += this.getDominantTrait(traits, 'i', 'e');
    result += this.getDominantTrait(traits, 'n', 's');
    result += this.getDominantTrait(traits, 't', 'f');
    result += this.getDominantTrait(traits, 'p', 'j');
    return result;
  }

  private getDominantTrait(traits, s1: string, s2: string) {
    if (traits[s1] > traits[s2]) return s1;
    else if (traits[s1] < traits[s2]) return s2;
    else return 'x';
  }
}
