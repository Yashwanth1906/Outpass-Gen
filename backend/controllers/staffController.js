import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import validator from "validator"

const prisma = new PrismaClient();

const createToken = (id) =>{
    console.log(process.env.JWT_SECRET);
    return jwt.sign({id},process.env.JWT_SECRET);
}

const staffRegister = async(req,res)=>{
    const {email,password,designation,section,name,year,department} = req.body;
    try{
        const exists = await prisma.staff.findUnique({
            where:{
                email:email
            }
        })
        if(exists){
            return res.json({success:false,message:"Student Already Found.Please Login"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter valid email"});
        }
        if(password.length < 8){
            return res.json({success:false,message:"Password isn't strong"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);
        const newStaff = await prisma.staff.create({
            data:{
                email,
                password:hashedPass,
                designation,
                class:section,
                name,
                year,
                department
            }
        })
        res.json({success:true,data:newStaff})
    }catch(err){
        console.log(err);
        res.json({success:true,message:err})
    }
}

const HODRegister = async(req,res)=>{
    const {email,password,name,department} = req.body;
    try{
        const exists = await prisma.staff.findUnique({
            where:{
                email:email
            }
        })
        if(exists){
            return res.json({success:false,message:"Student Already Found.Please Login"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter valid email"});
        }
        if(password.length < 8){
            return res.json({success:false,message:"Password isn't strong"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);
        const newHOD = await prisma.staff.create({
            data:{
                email,
                password:hashedPass,
                name,
                department
            }
        })
        res.json({success:true,data:newHOD})
    }catch(err){
        console.log(err);
        res.json({success:true,message:err})
    }
}


export {staffRegister}