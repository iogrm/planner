import { Question } from './../../question/entities/question.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Question, (q) => q.id)
  @JoinColumn({ name: 'question' })
  Question: Question;

  @Column()
  questionId: number;

  @Column()
  userId: number;

  @Column()
  percentage: number;
}
