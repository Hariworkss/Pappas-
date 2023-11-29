import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';


@Entity()
export class sportsCategory {
  @PrimaryGeneratedColumn()
  restaurant_id: number;

  @Column()
  name: string;

  @Column()
  license_no: number;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column({ type: 'boolean' })
  is_vegetarian: boolean;

  @Column({ type: 'text', nullable: true })
  image: string;

//   @ManyToMany(() => CuisineType, (cuisineType) => cuisineType.restaurants)
//   @JoinTable()
//   cuisineType: CuisineType[];

  

//   @ManyToOne(() => User, (user) => user.restaurants)
//   user: User;
}
