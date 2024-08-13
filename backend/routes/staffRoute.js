import express from "express"
import { HODForgetPassword, HODLogin,HODRegister,staffForgetPassword,staffLogin,staffRegister} from "../controllers/staffController.js";
import { authMiddleWare } from "../middleware/auth.js";
import { getStaffRequests } from "../controllers/outpassController.js";
const staffRouter = express.Router();

staffRouter.post("/stafflogin",staffLogin)
staffRouter.post("/HODlogin",HODLogin)
staffRouter.post("/register",staffRegister)
staffRouter.post("/hodregister",HODRegister)
staffRouter.get("/staffrequests",authMiddleWare,getStaffRequests)
staffRouter.post("/hodforgotpass",authMiddleWare,HODForgetPassword)
staffRouter.post("/staffforgotpass",authMiddleWare,staffForgetPassword)

export {staffRouter}