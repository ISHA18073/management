"use client" // use client 👉 For Client Component

import Link from 'next/link';
import React from 'react';

const EditEmployee = () => {
    return (
        <div className=' container mx-auto flex justify-center items-center h-screen'>
            {/* Main  */}
            <div className="form shadow-md border border-gray-400 rounded-xl py-6 px-9  ">
                {/* Top  */}
                <div className="top">
                    {/* Top-Child  */}
                    <div className="flex gap-[40px] mb-5 items-center">
                        {/* link  */}
                        <Link href='/'>
                            {/* Svg icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>

                        {/* text  */}
                        <h1 className='text-2xl font-semibold'>Edit Employee Detail</h1>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="bottom">
                    {/* Employee Name Input   */}
                    <div className="">
                        <input
                            type="text"
                            name='employeeName'
                            placeholder='Enter name'
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                       required />
                    </div>

                    {/* Employee dob  */}
                    <div className="">
                        <input
                            type="date"
                            name='dob'
                            placeholder='Enter DOB'
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                       required />
                    </div>
                     {/* Employee phone */}
                     <div className="">
                        <input
                            type="tel"
                            name='phone'
                            placeholder='Enter phone number'
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-8 placeholder-gray-400'
                      required  />
                    </div>

                    {/* Employee photo  */}
                    <div className="">
                        <input
                            type="file"
                            name='photo'
            
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        required />
                    </div>


                    {/* Update Button  */}
                    <div>
                        <button className=' bg-gray-100 hover:bg-gray-200 w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>Edit Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditEmployee;