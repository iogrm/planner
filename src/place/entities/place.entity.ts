import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Place {
  @PrimaryColumn({ nullable: false, type: String })
  id: string;

  @Column({ type: String, nullable: false })
  title: string;

  @Column({ type: String, nullable: false })
  country: string;
}
