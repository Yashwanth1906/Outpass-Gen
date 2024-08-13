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

const getStaffRequests = async(req,res)=>{
    const staffId = req.headers.id;
    try{
        const requests = await prisma.staffRequests.findMany({
            where:{
                OR:[
                    {staffId1:staffId},
                    {staffId2:staffId}
                ]
            },select:{
                outpassId:true
            }
        })
        let allrequests = [];
        for (const x of requests){
            console.log(x)
            const studentRequest = await prisma.outpass.findUnique({
                where:{
                    id : x.outpassId
                },select:{
                    id:true,
                    rollNo:true,
                    student:{
                        select:{
                            name:true,
                            class:true,
                            year:true,
                            department:true,
                        }
                    },
                    startDate:true,
                    endDate:true,
                    outTime:true,
                    inTime:true,
                    reason:true,
                    hostelBlock:true
                }
            })
            allrequests.push(studentRequest)
        }
        res.json({success:true,data:allrequests})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const editOd = async(req,res) =>{
    const {odId,startDate,endDate,outTime,inTime} = req.body;
    try{
        const updatedOutpass = await prisma.outpass.update({
            where:{
                id:odId
            },data:{
                startDate:startDate,
                endDate:endDate,
                outTime:outTime,
                inTime:inTime
            }
        })
        res.json({success:true,data:updatedOutpass})
    }catch(err){
        console.log(err);
        res.json({success:false,data:err})
    }
}


const HODacceptRequest = async(req,res) =>{
    const {outpassId,approval} = req.body;
    try{
        const updateOutpass = await prisma.outpass.update({
            where:{
                id:outpassId
            },data:{
                hodApproved:approval
            }
        })
        res.json({success:true,message:"Approved By HOD",data:updateOutpass})
    }
    catch(err){
        console.log(err)
        res.json({success:true,message:err})
    }
}

const staffacceptRequest = async(req,res) =>{
    const {outpassId,approval} = req.body;
    try{
        const udpateOutpass = await prisma.outpass.update({
            where:{
                id:outpassId
            },data:{
                advisorApproved:approval
            }
        })
        res.json({success:true,message:"Approved by Advisor",data:udpateOutpass})
    }catch(err){
        console.log(err)
        res.json({success:true,message:err})
    }
}
export {getOutpass,getStaffRequests}