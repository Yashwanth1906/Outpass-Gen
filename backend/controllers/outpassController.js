import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


const getOutpass = async(req,res)=>{
    const {startDate,endDate,outTime,inTime,reason,hostelBlock} = req.body;
    console.log(req.headers.id);
    try{
        const student = await prisma.student.findUnique({
            where:{
                id:req.headers.id
            },select:{
                staff1:{
                    select:{
                        id:true
                    }
                },
                staff2:{
                    select:{
                        id:true
                    }
                },
                hod:{
                    select:{
                        id:true,
                    }
                }
            }
        })
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
        const newStaffRequest = await prisma.staffRequests.create({
            data:{
                staffId1:student.staff1.id,
                staffId2:student.staff2.id,
                outpassId:newOutPass.id
            }
        })
        const newHodRequest = await prisma.hODRequests.create({
            data:{
                hodId:student.hod.id,
                outpassId:newOutPass.id
            }
        })
        res.json({success:true,outpass:newOutPass,staffRequest:newStaffRequest,hodRequest:newHodRequest})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

export {getOutpass}