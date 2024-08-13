import express from "express"
import { HODlogin,stafflogin } from "../controllers/staffController";

const staffRouter = express.Router();

staffRouter.post("/stafflogin",staffLogin)
staffRouter.post("/HODlogin",HODLogin)

export {staffRouter}