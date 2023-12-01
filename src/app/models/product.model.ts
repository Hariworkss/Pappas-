// product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductCategory } from './productCategory.model';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  productName: string;

  @Column()
  productImage: string;

//   @ManyToOne(() => ProductCategory, (productCategory) => productCategory.products, {
//     cascade: true, // You can customize cascade options based on your needs
//   })
//   @JoinColumn({ name: 'productCategoryId' }) // Specify the foreign key column name
//   productCategory: ProductCategory;
}
