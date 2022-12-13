import { Answer } from './../../answer/entities/answer.entity';
import { Trait } from 'src/type/trait_string';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  text: string;

  @Column({ type: String, default: 'i' })
  traitPlus: Trait;

  @Column({ type: String, default: 'e' })
  traitMinus: Trait;

  @OneToMany(() => Answer, (a) => a.question)
  answers: Answer[];
}
