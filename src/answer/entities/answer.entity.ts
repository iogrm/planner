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

  @ManyToOne(() => Question, { nullable: false })
  question: Question;

  // @Column()
  // questionId: number;

  @Column()
  userId: number;

  @Column()
  percentage: number;
}
