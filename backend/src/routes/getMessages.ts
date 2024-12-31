import { Router } from "express";
import { AppDataSource } from "../ormconfig";
import { Message } from "../entities/Message";

const getMessageRouter = Router();

getMessageRouter.get("/messages", (req, res) => {
  const messages = AppDataSource.getRepository(Message);
  messages.find().then((messages) => {
    res.json(messages);
  });
});

export default getMessageRouter;