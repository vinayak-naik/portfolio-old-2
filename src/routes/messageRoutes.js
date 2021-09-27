import express from "express";
const router = express.Router();
import {
  getMessages,
  createMessage,
} from "../controllers/msgControllers";

router.route("/").get(getMessages).post(createMessage);


export default router;
