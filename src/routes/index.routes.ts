/*
Company: BzAnalytics <https://www.bzanalytics.ai>
Author: Rejinsha S <Rejinshalb@gmail.com>
index.routes.ts (c) 2023
Desc: description
Created:  2023-10-28T10:19:33.825Z
Modified: 2023-10-28T10:38:18.028Z
*/

import { Router } from 'express';
import { IndexController } from '../app/controllers/index.controller';
import { getCategory } from '../app/controllers/sportsCategory.controller';
import { upload } from '../core/config/multer.config';

//import { IndexMiddleware } from '../app/middlewares/index.middleware';

const router = Router();
const indexController = new IndexController();
//const indexMiddleware = new IndexMiddleware();

router.route('/').get(indexController.welcomeController.bind(indexController));


// category routes
router.get('/get-categories', getCategory)




//router.get('/test', indexMiddleware.verifyToken, indexController.protected);

export default router;