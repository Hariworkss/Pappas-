/*
Company: BzAnalytics <https://www.bzanalytics.ai>
Author: Rejinsha S <Rejinshalb@gmail.com>
index.ts (c) 2023
Desc: description
Created:  2023-10-28T10:19:33.825Z
Modified: 2023-10-28T10:34:17.283Z
*/

import express from "express"
import { App } from './app'


const app = express();



class Index {
    constructor() {
        this.initialize();
    }

    async initialize() {
        const app = new App(8080);


        await app.listen();
        console.log("server hosted")
    }
}

new Index();
