import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/buttonss";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signup() {
    const [password, setPassword] = useState<string>(" ");
    const [name, setName] = useState<string>(" ");
    const [rollNo, setRollNo] = useState<string>(" ");
    const [year, setYear] = useState<string>(" ");
    const [department, setDepartment] = useState<string>(" ");
    const [section, setSection] = useState<string>(" ");
    const [contact, setContact] = useState<string>(" ");

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-900">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
                <div className="absolute inset-0 h-full w-full  blur-3xl" />
                <div className="relative z-50">
                    <h1 className="font-bold text-2xl text-white text-center mb-6">
                        Student Login
                    </h1>
                    <h2 className="font-bold text-xl text-white text-center mb-8">
                        CREATE AN ACCOUNT
                    </h2>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="rollno" className="block text-white mb-1">
                                Roll No
                            </label>
                            <Input type="text" placeholder="Roll No" onChange={(e) => setRollNo(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-white mb-1">
                                Password
                            </label>
                            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-white mb-1">
                                Name
                            </label>
                            <Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="year" className="block text-white mb-1">
                                Year
                            </label>
                            <Input type="text" placeholder="Year" onChange={(e) => setYear(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="department" className="block text-white mb-1">
                                Department
                            </label>
                            <Input type="text" placeholder="Department" onChange={(e) => setDepartment(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="section" className="block text-white mb-1">
                                Section
                            </label>
                            <Input type="text" placeholder="Section" onChange={(e) => setSection(e.target.value)} />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="contactno" className="block text-white mb-1">
                                Contact No
                            </label>
                            <Input type="text" placeholder="Contact No" onChange={(e) => setContact(e.target.value)} />
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button val={"Signup"} onClicked={async()=>{
                            try{
                                const res=await axios.post(`${BACKEND_URL}/api/student/register`,{
                                    rollNo,
                                    password,
                                    name,
                                    contact,
                                    year,
                                    department,
                                    section,

                                })
                                //@ts-ignore
                                localStorage.setItem("usertoken",res.data.token);
                                console.log(res);
                                window.alert("done")
                            }
                            catch{
                                window.alert("error");
                            }
                        }}>Sign Up</Button>
                        <p className="text-sm leading-5 text-white text-center">
                            {"Have an Account? "}
                            <Link to={"/signin"} className="font-medium text-blue-500 hover:text-blue-400">
                                {" Sign in"}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
