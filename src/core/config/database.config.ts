import 'reflect-metadata'
import { DataSource } from 'typeorm'


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "pappas",
    synchronize: true,
    // entities:['../../app/models/*.ts'],
    entities: ['src/app/models/*.ts'],
    logging: true,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Db_connected")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })