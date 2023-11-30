import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, CreateDateColumn } from 'typeorm';


@Entity()
export class sportsCategory {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  categoryname: string;

  @Column()
  image: string;

}
