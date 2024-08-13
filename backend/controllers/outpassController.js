import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


const getOutpass = async(req,res)=>{
    const {startDate,endDate,outTime,inTime,reason,hostelBlock} = req.body;
    console.log(req.headers.id);
    try{
        const newOutPass = await prisma.outpass.create({
            data:{
                rollNo:req.headers.id,
                startDate:startDate,
                endDate:endDate,
                outTime:outTime,
                inTime:inTime,
                reason,
                hostelBlock,
            }
        })
        res.json({success:true,data:newOutPass})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

export {getOutpass}