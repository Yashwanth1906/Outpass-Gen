import express from "express"
import { HODLogin,staffLogin,staffRegister} from "../controllers/staffController.js";

const staffRouter = express.Router();
staffRouter.get("/staffregister",staffRegister)
staffRouter.post("/stafflogin",staffLogin)
staffRouter.post("/HODlogin",HODLogin)

export {staffRouter}