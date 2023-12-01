import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductCategory } from './productCategory.model';


@Entity()
export class SportsCategory {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  category_image: string;

  @Column()
  category_name: string;

  // @OneToMany(() => ProductCategory, (productCategory:any) => productCategory.sportsCategory)
  // productCategories: ProductCategory[];
}
