import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs"
import validator from "validator"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

const createToken = (id) =>{
    console.log(process.env.JWT_SECRET);
    return jwt.sign({id},process.env.JWT_SECRET);
}


const staffLogin = async (req,res)=>{
    const {email,password}=req.body

    try{
        const staff = await prisma.staff.findUnique({
            where:{
                email:email,
            }
        })


        if (!staff){
            return res.json({success:false,message:"staff not found"})

        }
        const match = await bcrypt.compare(password,staff.password)
        if (!match){
            return res.json({success:false,message:"pass mismatch"})
        }

        const token = createToken(staff.id)


        res.json({success:true,message:`bearer${token}`})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"error"})
    }
}


const HODLogin = async (req,res)=>{
    const {email,password}=req.body

    try{
        const HOD = await prisma.HOD.findUnique({
            where:{
                email:email,
            }
        })


        if (!HOD){
            return res.json({success:false,message:"HOD not found"})

        }
        const match = await bcrypt.compare(password,HOD.password)
        if (!match){
            return res.json({success:false,message:"pass mismatch"})
        }

        const token = createToken(HOD.id)


        res.json({success:true,message:`bearer${token}`})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"error"})
    }
}

export {staffLogin,HODLogin}