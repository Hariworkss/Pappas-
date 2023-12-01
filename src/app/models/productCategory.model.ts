import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany , JoinColumn } from 'typeorm';
import { SportsCategory } from './sportscategory.model';
import { Product } from './product.model';

@Entity()
export class ProductCategory {
    @PrimaryGeneratedColumn()
    productCategoryId: number;

    @Column()
    productCategoryName: string;

    @Column()
    productCategoryImage: string;

    //   @ManyToOne(() => SportsCategory, (sportsCategory) => sportsCategory.productCategories, {
    //     cascade: true, // You can customize cascade options based on your needs
    //   })
    //   @JoinColumn({ name: 'sportsCategoryId' }) // Specify the foreign key column name
    //   myCustomName: SportsCategory;

    // @OneToMany(() => Product, (product:any) => product.productCategory)
    // products: Product[];

}