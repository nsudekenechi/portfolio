import React from 'react'
import { TbBulb } from "react-icons/tb";
import { MdOutlineCode } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
export const Dashboard = () => {
  return (
    <div className='text-white py-5'>
      <h1>Dashboard Overview</h1>
      <div className="grid grid-cols-3 py-10 gap-x-10">
        <div className=' bg-[#111] rounded-2xl p-10'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-Fira'>Skills</h1>
            <MdOutlineCode size={18} className='text-blue-600' />

          </div>
          <p className='text-4xl text-white mt-3'>0</p>
        </div>

        <div className=' bg-[#111] rounded-2xl p-10'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-Fira'>Projects</h1>
            <TbBulb size={18} className='text-blue-600' />

          </div>
          <p className='text-4xl text-white mt-3'>0</p>
        </div>

        <div className=' bg-[#111] rounded-2xl p-10'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-Fira'>Categories</h1>
            <BiCategory size={18} className='text-blue-600' />

          </div>
          <p className='text-4xl text-white mt-3'>0</p>
        </div>
      </div>
    </div>
  )
}
