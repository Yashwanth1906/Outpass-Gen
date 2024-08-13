import express from "express"
import { HODRegister, staffRegister } from "../controllers/staffController.js";

const staffRouter = express.Router();

staffRouter.post("/register",staffRegister)
staffRouter.post("/hodregister",HODRegister)

export {staffRouter}