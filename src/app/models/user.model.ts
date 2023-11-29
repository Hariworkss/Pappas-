import {Entity,Column,PrimaryGeneratedColumn,OneToMany,BeforeInsert, ManyToOne, JoinColumn} from 'typeorm'
import { UserRole } from './constants';
import bcrypt from 'bcrypt'
import { sportsCategory } from './sportsCategory.model';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({type: "enum",enum:[UserRole.ADMIN,UserRole.CUSTOMER,UserRole.MANAGER],default:UserRole.CUSTOMER,nullable:true})
  usertype: UserRole

  @BeforeInsert()
  async beforeInsert(next: Function) {
    try{
        const salt= await bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hash(this.password,salt);
        console.log(hashedPassword);
        this.password = hashedPassword
        next();
    }catch(err){
      console.log(err)
    }
   
  }

  // @OneToMany(() => Restaurant, (restaurant) => restaurant.user)
  // restaurants: Restaurant[];
  //  @OneToMany(() => Rating, (rating) => rating.user )
  // ratings_by_user: Rating[];


}