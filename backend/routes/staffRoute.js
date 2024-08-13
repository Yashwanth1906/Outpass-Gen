import express from "express"
import { HODLogin,staffLogin,staffRegister} from "../controllers/staffController.js";
const staffRouter = express.Router();

staffRouter.post("/stafflogin",staffLogin)
staffRouter.post("/HODlogin",HODLogin)
staffRouter.post("/register",staffRegister)
staffRouter.post("/hodregister",HODRegister)

export {staffRouter}