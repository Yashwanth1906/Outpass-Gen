import express from "express"
import cors from "cors"
import { studentRouter } from "./routes/studentRoute.js";
import { PrismaClient } from "@prisma/client";
import { staffRouter } from "./routes/staffRoute.js";

const prisma = new PrismaClient()
const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/student",studentRouter)
app.use("/api/staff",staffRouter)

app.listen(process.env.BACKEND_PORT,()=>{
    console.log("Running")
})

app.delete("/test",async(req,res)=>{
    await prisma.outpass.delete({
        where:{
            id:"f61407a3-83bb-4269-ad24-4d8c3ffa1a55"
        }
    })
    res.json({success:true})
})