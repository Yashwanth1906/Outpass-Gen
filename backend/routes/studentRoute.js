import express from "express"
import { studentLogin, studentRegister } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/register",studentRegister);
studentRouter.post("/login",studentLogin)
studentRouter.post("/getOutpass",)

export {studentRouter}