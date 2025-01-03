import { DataSource } from "typeorm"; // é quem estabele a conexão do banco

import * as dotenv from "dotenv"; 
dotenv.config();

const isDebug = process.env.DEBUG === "TRUE";

export const AppDataSource = isDebug ? 
  new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    entities: [`${__dirname}/entities/*.ts`],
    migrations: [`${__dirname}/migrations/*.ts`],
    subscribers: [],
    logging: true,
  })
  : 
  new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "MensagemFacil",
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/entities/*.ts`],
    migrations: [`${__dirname}/migrations/*.ts`],
    subscribers: [],
  });