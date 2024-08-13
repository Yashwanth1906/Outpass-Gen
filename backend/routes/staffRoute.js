import express from "express"
import { staffRegister } from "../controllers/staffController.js";

const staffRouter = express.Router();

staffRouter.post("/register",staffRegister)

export {staffRouter}