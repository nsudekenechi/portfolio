import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";

export const Login = () => {
  return (
    <div className='bg-black min-h-screen flex justify-center items-center'>
      <div className='bg-[#111] outline-[#222]   w-[40%]  outline p-10 rounded-xl text-white flex  flex-col items-center'>
        <div>
          <FaRegCircleUser size={20} />
        </div>

        <h1 className="mt-3 mb-1 text-2xl font-Fira">Welcome Back</h1>
        <p className='text-sm text-[#777] font-roboto'>Don't have an account yet? <Link className='text-white'>Sign up</Link></p>

        <form action="" className='py-5 w-[100%] font-[poppins]'>
          <div className='shadow-inputShadow bg-[#000] p-3 rounded-lg outline outline-[#161616] flex items-center gap-x-2 text-[#777] mb-5'>
            <HiOutlineMail className='' />
            <input type="email" placeholder='Email address' className='text-xs bg-transparent w-[100%] outline-none placeholder:text-[#777] text-white caret-[#777]' />
          </div>

          <div className='shadow-inputShadow bg-[#000] p-3 rounded-lg outline outline-[#161616] flex items-center gap-x-2 text-[#777] mb-5'>
            <RiLockPasswordFill className='' />
            <input type="password" placeholder='Password' className='text-xs bg-transparent w-[100%] outline-none placeholder:text-[#777] text-white caret-[#777]' />
          </div>

          <button className='bg-blue-600 p-3 w-[100%] text-xs shadow-xl shadow-[#1f1f1f] rounded-2xl'>Login</button>
        </form>

        <div className='w-[100%] '>
          <div className=' grid grid-cols-11 items-center justify-center mb-5'>
            <div className='col-span-5 border-t border-[#222]'></div>
            <span className='flex items-center justify-center text-[#444] text-xs'>OR</span>
            <div className='col-span-5 border-t border-[#222]'></div>

          </div>
          <div className="grid grid-cols-3 w-[100%] gap-x-5">
            <div className='bg-[#222] p-3 flex justify-center items-center rounded-lg border-t border-[#555]' style={{ boxShadow: "inset 0px -2px 1px  rgba(0,0,0,1)" }}>
              <FaApple size={15} />
            </div>

            <div className='bg-[#222] p-3 flex justify-center items-center rounded-lg border-t border-[#555]' style={{ boxShadow: "inset 0px -2px 1px  rgba(0,0,0,1)" }}>
              <FcGoogle size={15} />
            </div>

            <div className='bg-[#222] p-3 flex justify-center items-center rounded-lg border-t border-[#555]' style={{ boxShadow: "inset 0px -2px 1px  rgba(0,0,0,1)" }}>
              <BsTwitterX size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
