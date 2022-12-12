import { Trait } from 'src/type/trait_string';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
