import { DataSource } from "typeorm"; // é quem estabele a conexão do banco

import * as dotenv from "dotenv"; 
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "MensagemFacil-db",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_DATABASE || "MensagemFacilMensagemFacil",
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/entities/*.ts`],
  migrations: [`${__dirname}/migrations/*.ts`],
  subscribers: [],
});