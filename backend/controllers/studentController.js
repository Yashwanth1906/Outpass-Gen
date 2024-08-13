import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const createToken = (id) =>{
    console.log(process.env.JWT_SECRET);
    return jwt.sign({id},process.env.JWT_SECRET);
}

const studentRegister = async (req, res) => {
    const { rollNo, name, email, password, contact, section, year, department } = req.body;
    try {    
      const exists = await prisma.student.findUnique({
        where: {
          id: rollNo,
        }
      });
      const staffs = await prisma.staff.findMany({
        where: {
          class:section,
          year:year,
          department:department
        },
        select: {
          id: true,
        },
      });
  
      const hod = await prisma.hOD.findMany({
        where: {
          department: department,
        },
        select: {
          id: true,
        },
      });
  
      console.log(staffs);
      console.log(hod);
  
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
  
      const newStudent = await prisma.student.create({
        data: {
          id: rollNo,
          name,
          password: hashedPass,
          contact,
          class: section,
          year,
          department,
          staff1: {
            connect: { id: staffs[0].id },
          },
          staff2: {
            connect: { id: staffs[1].id },
          },
          hod: {
            connect: { id: hod[0].id },
          },
        },
      });
      const token = createToken(newStudent.id);
      res.json({ success: true, message: "Student Created", student: newStudent, token: `Bearer ${token}` });
    } catch (err) {
      console.log(err);
      res.json({ success: false, message: err });
    }
  };
  
const studentLogin = async (req,res)=>{
    const {rollNo,password} = req.body;
    try{
        const student = await prisma.student.findUnique({
            where:{
                id:rollNo
            },
        })
        if(!student){
            return res.json({success:false,message:"Student not found"});
        }
        const match = await bcrypt.compare(password,student.password); 
        if(!match){
            return res.json({success:false,message:"Invalid Credantails"});
        }
        const token = createToken(student.id);
        res.json({success:true,token:`Bearer ${token}`});
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}


export {studentLogin,studentRegister}