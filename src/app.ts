/*
Company: BzAnalytics <https://www.bzanalytics.ai>
Author: Rejinsha S <Rejinshalb@gmail.com>
app.ts (c) 2023
Desc: description
Created:  2023-10-28T10:19:33.825Z
Modified: 2023-10-28T10:35:01.622Z
*/

import express, { Application } from 'express';
import cors from 'cors';

// Routes
import indexRoutes from './routes/index.routes';
//import exampleRoutes from './routes/example.routes';

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(indexRoutes);
        //this.app.use('/ex', exampleRoutes);
    }

    async listen() {
        await this.app.listen( this.app.get('port'));
        // eslint-disable-next-line no-console
        console.log( `server started at http://localhost:${ this.app.get('port') }` );
    }
    
}