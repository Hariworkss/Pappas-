import { Request, Response } from 'express';
import { sportsCategory } from '../models/sportsCategory.model';
import { AppDataSource } from '../../core/config/database.config';


// export const addRestaurant = async (req: Request, res: Response) => {

//   try {
//     const {  name, license_no, description, location, is_vegetarian } = req.body;

//     const restaurantRepository = AppDataSource.createEntityManager();

//     const lice_no = Number(license_no);

//     // Check if a restaurant with the given rest_id already exists
//     const existingRestaurant = await restaurantRepository.findOne(Restaurant, { where: { license_no: lice_no } });

//     if (existingRestaurant) {
//       res.status(409).json({ message: 'Restaurant is already registered.' });
//     } else {
//       // If the restaurant doesn't exist, create a new restaurant and add it to the database
//       const restaurant = new Restaurant();
//       restaurant.name = name;
//       restaurant.license_no = license_no;
//       restaurant.description = description;
//       restaurant.location = location;
//        if(is_vegetarian=='false'){
//         restaurant.is_vegetarian = false;
//        }else{
//         restaurant.is_vegetarian = true;
//        }
//       restaurant.image =  req.file?.path as string;
//       // console.log(`restaurant image${restaurant.image}`);

//       // Save the restaurant to the database
//       const savedRestaurant = await restaurantRepository.save(Restaurant,restaurant);
//       res.status(201).json(savedRestaurant);
//     }
//   } catch (error) {
//     console.error('Error creating restaurant:', error);
//     res.status(500).json({ error: 'An error occurred while creating the restaurant.' });
//   }
// };


// export const updateRestaurant = async (req: Request, res: Response) => {
//   try {
//     const { name, description, location, is_vegetarian } = req.body;
//     const restaurantRepository = AppDataSource.createEntityManager();
//     const { restaurant_id } = req.params; 
//     const rest_id = Number(restaurant_id);

//     // Checking if a restaurant with the given lice_no already exists
//     const existingRestaurant = await restaurantRepository.findOne(Restaurant, { where: { restaurant_id: rest_id } });

//     if (!existingRestaurant) {
//       res.status(409).json({ message: 'Restaurant does not exist..' });
//     }
//     else {
//       // If the restaurant exist, update restaurant details
//       existingRestaurant.name = name;
//       // existingRestaurant.license_no = license_no;
//       existingRestaurant.description = description;
//       existingRestaurant.location = location;
//       existingRestaurant.is_vegetarian = is_vegetarian;
//       existingRestaurant.image =  req.file?.path as string;

//       // Saving
//       const updatedRestaurant = await restaurantRepository.save(existingRestaurant);
//       res.json(updatedRestaurant);
//     }
//   } catch (error) {
//     console.error('Error updating restaurant:', error);
//     res.status(500).json({ error: 'An error occurred while updating the restaurant.' });
//   }
// };




// export const deleteRestaurant = async (req: Request, res: Response) => {
//   try {
//     const { restaurant_id } = req.params; 
//     const rest_id = Number(restaurant_id);
//     const restaurantRepository = AppDataSource.createEntityManager();

//     const existingRestaurant = await restaurantRepository.findOne(Restaurant, { where: { restaurant_id: rest_id } });

//     if (!existingRestaurant) {
//       res.status(404).json({ message: 'Restaurant not found.' });
//     } else {
//       // Delete the restaurant
//       await restaurantRepository.remove(existingRestaurant);
//       res.status(200).json({ message: 'Restaurant deleted.' });
//     }
//   } catch (error) {
//     console.error('Error deleting restaurant:', error);
//     res.status(500).json({ error: 'An error occurred while deleting the restaurant.' });
//   }
// };


// export const getAllRestaurants = async (req: Request, res: Response) => {
//   try {
//     // Get the restaurant repository
//     const restaurantRepository = AppDataSource.createEntityManager();

//     // Query the database to get all restaurants
//     const restaurants = await restaurantRepository.find(Restaurant);

//     // Send the list of restaurants as a JSON response
//     res.json(restaurants);
//   } catch (error) {
//     console.error('Error fetching restaurants:', error);
//     res.status(500).json({ error: 'An error occurred while fetching restaurants.' });
//   }
// };








