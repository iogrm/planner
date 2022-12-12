import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  text: string;

  @Column({ type: String, default: 'i' })
  traitPlus: traits;

  @Column({ type: String, default: 'e' })
  traitMinus: traits;
}
