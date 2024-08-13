import express from "express"
import { HODLogin,staffLogin } from "../controllers/staffController.js";

const staffRouter = express.Router();

staffRouter.post("/stafflogin",staffLogin)
staffRouter.post("/HODlogin",HODLogin)

export {staffRouter}