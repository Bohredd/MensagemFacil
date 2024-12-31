import { DataSource } from "typeorm"; // é quem estabele a conexão do banco

import * as dotenv from "dotenv"; 
dotenv.config();

export const AppDataSource = new DataSource({
        type: "sqlite",
        database: process.env.DB_DATABASE || "default_database_name",
        synchronize: true,
        logging: false,
        entities: [
            `${__dirname}/entities/*.ts`,
        ],
        migrations: [
            `${__dirname}/migrations/*.ts`,
        ],
        subscribers: []
    }
);