"use client"
// Import necessary libraries
import Link from 'next/link';
import React, { useState } from "react";

// AddEmployee component
const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        dob: "",
        phone: "",
        photo: null  // Use null to represent the absence of a file
    });

    // Function to handle file change
    const handleFileChange = (e) => {
        setEmployee({
            ...employee,
            photo: e.target.files[0]  // Use the first file selected
        });
    };

    // Function to add employee details
    const addEmployeeDetail = async () => {
        const formData = new FormData();
        formData.append("name", employee.name);
        formData.append("dob", employee.dob);
        formData.append("phone", employee.phone);
        formData.append("photo", employee.photo);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee`, {
                method: 'POST',
                body: formData
            });

            if (!res.ok) {
                // Handle non-200 response
                const errorMessage = await res.text();
                throw new Error(`API Error: ${res.status} - ${errorMessage}`);
            }
    
            const data = await res.json();
    
            // Destructure Data
            const { message, error } = data;
    
            // Condition
            if (error) {
                alert(error); // Error Message
            } else {
                alert(message); // Success Message
                setEmployee({
                    name: "",
                    dob: "",
                    phone: "",
                    photo: null
                });
            }
        } catch (error) {
            console.error("Error adding employee details:", error.message);
            // Handle error as needed
        }
    };
    return (
        <div className=' container mx-auto flex justify-center items-center h-screen'>
            {/* Main  */}
            <div className="form border shadow-md border-gray-400 rounded-xl py-6 px-9  ">
                {/* Top  */}
                <div className="top">
                    {/* Top-Child  */}
                    <div className="flex gap-[40px] mb-5 items-center">
                        {/* Link  */}
                        <Link href='/'>
                            {/* Svg Icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>

                        {/* Text  */}
                        <h1 className='text-2xl font-semibold'>
                            Add Employee Detail
                        </h1>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="bottom">
                    {/* Employee Name Input  */}
                    <div className="">
                        <input
                            type="text"
                            name='employeeName'
                            placeholder='Enter name'
                            value={employee.name}
                            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                            required
                        />
                    </div>

                    {/* Employee dob  */}
                    <div className="">
                        <input
                            type="date"
                            name='dob'
                            placeholder='Enter DOB'
                            value={employee.dob}
                            onChange={(e) => setEmployee({ ...employee, dob: e.target.value })}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                            required
                        />
                    </div>

                    {/* Employee phone */}
                    <div className="">
                        <input
                            type="String"
                            name='phone'
                            placeholder='Enter phone number'
                            value={employee.phone}
                            onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-8 placeholder-gray-400'
                            required
                        />
                    </div>

                    {/* Employee photo  */}
                    <div className="">
                        <input
                            type="file"
                            name='photo'
                            onChange={handleFileChange}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                            required
                        />
                    </div>

                    {/* Add Button  */}
                    <div>
                        <button onClick={addEmployeeDetail}
                            className=' bg-gray-100 hover:bg-gray-200 w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>
                            Add Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;
