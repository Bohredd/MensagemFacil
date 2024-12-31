import express from "express";
import { AppDataSource } from "./ormconfig";
import messageRoutes from "./routes/messageRoutes";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });

    app.use(messageRoutes);

  })
  .catch((error) => {
    console.log("Error during Data Source initialization", error);
  });