import { Answer } from 'src/answer/entities/answer.entity';
import { Mbti } from 'src/type/mbti_string';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: '1',
  })
  nationalId: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @OneToMany(() => Answer, (a) => a.user)
  answers: Answer[];

  @Column({ nullable: true })
  mbti: string;
}
