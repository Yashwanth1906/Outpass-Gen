
"use client"

import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import axios from "axios"
import { BACKEND_URL } from "../config"

export  function OutPass() {
  const [filter, setFilter] = useState("pending")
  const [outpasses,setOutpasses]=useState()
  

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/student/listpasses`,{
            headers:{
                Authorization:localStorage.getItem("usertoken")
            }
        }).then((data)=>{
            console.log(data.data)
            setOutpasses(data.data)

        })
    },[])


//   const filteredOutpasses = outpasses.filter((outpass) => outpass.status === filter)
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">

        hello
      {/* <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Outpass Management</h1>
        <div className="flex items-center space-x-4">
          <Button variant={filter === "pending" ? "default" : "outline"} onClick={() => setFilter("pending")}>
            Pending
          </Button>
          <Button variant={filter === "approved" ? "default" : "outline"} onClick={() => setFilter("approved")}>
            Approved
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredOutpasses.map((outpass, index) => (
          <Card
            key={index}
            className={`${
              outpass.status === "pending" ? "border-yellow-500 bg-yellow-50" : "border-green-500 bg-green-50"
            }`}
          >
            <CardHeader>
              <CardTitle>{outpass.name}</CardTitle>
              <CardDescription>Roll No. {outpass.rollNumber}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="font-medium">Start Date</div>
                  <div>{outpass.startDate}</div>
                </div>
                <div>
                  <div className="font-medium">End Date</div>
                  <div>{outpass.endDate}</div>
                </div>
                <div>
                  <div className="font-medium">Check-in Time</div>
                  <div>{outpass.checkInTime}</div>
                </div>
                <div>
                  <div className="font-medium">Check-out Time</div>
                  <div>{outpass.checkOutTime}</div>
                </div>
                <div>
                  <div className="font-medium">Hostel Block</div>
                  <div>{outpass.block}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  )
}