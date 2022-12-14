import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './../../question/entities/question.entity';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Question, { nullable: false })
  question: Question;

  @ManyToOne(() => User, { nullable: false })
  user: User;

  @Column()
  percentage: number;

  @Column()
  time: Date;
}
