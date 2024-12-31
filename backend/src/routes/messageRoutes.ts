import getMessageRouter from "./getMessages";
import createMessageRouter from "./createMessage";
import { Router } from "express";

const messageRoutes = Router();

messageRoutes.use(getMessageRouter);
messageRoutes.use(createMessageRouter);

export default messageRoutes;