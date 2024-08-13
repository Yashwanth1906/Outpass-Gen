import express from "express"
import { studentLogin, studentRegister } from "../controllers/studentController.js";
import { getOutpass, listpasses } from "../controllers/outpassController.js";
import { authMiddleWare } from "../middleware/auth.js";

const studentRouter = express.Router();

studentRouter.post("/register",studentRegister);
studentRouter.post("/login",studentLogin)
studentRouter.post("/getOutpass",authMiddleWare,getOutpass)
studentRouter.get("/listpasses",authMiddleWare,listpasses)

export {studentRouter}