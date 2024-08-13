import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const createToken = (id) =>{
    console.log(process.env.JWT_SECRET);
    return jwt.sign({id},process.env.JWT_SECRET);
}

const studentRegister = async(req,res)=>{
    const {rollNo,name,email,password,contact,section,year,department} = req.body;
    try{    
        const exists = await prisma.student.findUnique({
            where:{
                rollNo:rollNo
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
        const newStudent = await prisma.student.create({
            data:{
                id:rollNo,
                name,
                email,
                password:hashedPass,
                contact,
                class:section,
                year,
                department
            }
        })
        const token = createToken(newStudent.rollNo);
        res.json({success:true,message:"Student Created",student:newStudent,token:`Bearer ${token}`})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err});
    }
}

const studentLogin = async (req,res)=>{
    const {rollNo,password} = req.body;
    try{
        const student = await prisma.student.findUnique({
            where:{
                rollNo:rollNo
            },
        })
        if(!student){
            return res.json({success:false,message:"Student not found"});
        }
        const match = await bcrypt.compare(password,student.password); 
        if(!match){
            return res.json({success:false,message:"Invalid Credantails"});
        }
        const token = createToken(student.rollNo);
        res.json({success:true,token:`Bearer ${token}`});
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}


export {studentLogin,studentRegister}