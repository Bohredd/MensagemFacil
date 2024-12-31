import { Router } from "express";
import { AppDataSource } from "../ormconfig";
import { Message } from "../entities/Message";

const createMessageRouter = Router();

createMessageRouter.post("/messages", (req, res) => {
  const { content, date, image } = req.body;
  const message = new Message(content, date, image);

  const messages = AppDataSource.getRepository(Message);
  messages.save(message).then((message) => {
    res.json(message);
  });
});

export default createMessageRouter;
