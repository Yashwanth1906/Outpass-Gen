import express from "express"
import cors from "cors"
import { studentRouter } from "./routes/studentRoute.js";

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/student",studentRouter)

app.listen(process.env.BACKEND_PORT,()=>{
    console.log("Running")
})