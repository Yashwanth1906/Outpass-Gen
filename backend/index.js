import express from "express"
import cors from "cors"
import { studentRouter } from "./routes/studentRoute.js";
import { PrismaClient } from "@prisma/client";
import { staffRouter } from "./routes/staffRoute.js";

const prisma = new PrismaClient();
const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/student",studentRouter)
app.use("/api/staff",staffRouter)

app.listen(process.env.BACKEND_PORT,()=>{
    console.log("Running")
})

app.delete("/test",async(req,res)=>{
    await prisma.student.deleteMany({})
    res.json({success:true})
})