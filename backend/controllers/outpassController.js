import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


const getOutpass = async(req,res)=>{
    const {startDate,endDate,outTime,inTime,reason,hostelBlock} = req.body;
    try{
        
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}