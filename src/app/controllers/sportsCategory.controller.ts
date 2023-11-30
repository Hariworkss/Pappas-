import { Request, Response } from 'express';
import { sportsCategory } from '../models/sportscategory.model';
import { AppDataSource } from '../../core/config/database.config';


export const getCategory = async (req: Request, res: Response) => {
    try {
        const entityManager = AppDataSource.createEntityManager();

        //  new rating entity
        const newRating = new sportsCategory();
        

        res.status(201).json(sportsCategory);
    } catch (error) {
        console.error('Error in getting category', error);
        res.status(500).json({ error });
    }
};



