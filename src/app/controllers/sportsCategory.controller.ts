import { Request, Response } from 'express';
import { AppDataSource } from '../../core/config/database.config';
import { SportsCategory } from '../models/sportscategory.model';


export const getCategory = async (req: Request, res: Response) => {
    try {
        const entityManager = AppDataSource.createEntityManager();

        //  new rating entity
        const newRating = new SportsCategory();
        

        res.status(201).json(SportsCategory);
    } catch (error) {
        console.error('Error in getting category', error);
        res.status(500).json({ error });
    }
};



