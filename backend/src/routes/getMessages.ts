import { Router } from "express";
import { AppDataSource } from "../ormconfig";
import { Message } from "../entities/Message";
import { Between } from "typeorm";

const getMessageRouter = Router();

getMessageRouter.get("/messages", async (req, res) => {
  const date = req.query;
  const messages = AppDataSource.getRepository(Message);

  if (date.start && date.end) {
    try {
      const startDate = new Date(date.start as string);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(date.end as string);
      endDate.setHours(23, 59, 59, 999);

      const foundMessages = await messages.find({
        where: {
          date: Between(startDate, endDate),
        },
      });

      res.json(foundMessages);
    } catch (error) {
      res.status(400).json({ error: "Invalid date format" });
    }
  } else {
    try {
      const foundMessages = await messages.find();
      res.json(foundMessages);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve messages" });
    }
  }
});

export default getMessageRouter;
