import React from 'react'
import Link from "next/link"

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=''>
        <Link href="/employee/employeeList">
          <button className="border border-gray-400 rounded-lg font-medium px-3 py-1.5 mx-2 hover:bg-black hover:text-white">
           View Employee Detail
          </button>
        </Link>
        <Link href="/employee/employeeList/addemployee">
          <button className="border border-gray-400 rounded-lg font-medium px-3 py-1.5 mx-2 hover:bg-black hover:text-white">
            Add Employee

          </button>
        </Link>
      </div>
    </div>
  );
}
