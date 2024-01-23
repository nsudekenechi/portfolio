import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <div className='text-white grid grid-cols-3 p-10'>
            <div className='col-span-2'>
                <h1 className=' text-[5rem] font-bold font-[poppins] mb-2'>Kenechi <br /> <span className='border-b border-b-blue-600 '>N</span>sude.</h1>
                <h1 className='text-xl mb-10 font-[poppins]'>FullStack Developer</h1>
                <div className='py-10 flex gap-x-5 items-center [poppins]'>
                    <Link className='flex gap-x-2 items-center hover:-translate-y-0.5 duration-700 hover:text-purple-800'>
                        <FaGithub size={20} />
                        <span className='text-[#777]'>GitHub</span>
                    </Link>
                    <Link className='flex gap-x-2 items-center hover:-translate-y-0.5 hover:text-blue-400 duration-700'>
                        <FaLinkedinIn size={20} />
                        <span className='text-[#777]'>LinkedIn</span>
                    </Link>
                    <Link className='flex gap-x-2 items-center hover:-translate-y-0.5 hover:text-blue-600 duration-700 '>
                        <FaTwitter size={20} />
                        <span className='text-[#777]'>Twitter</span>
                    </Link>
                </div>
            </div>
            <div className='font-[poppins]'>
                <p className='text-2xl text-[#888] mb-10'>Hello, There 👋</p>
                <p className='text-lg text-[#fff] leading-10'>
                    With over 3 years of experience, I am a seasoned fullstack developer, with relentless pursuit for excellence and an insatiable curiosity for emerging technologies. 
                    I possess expertise in the development of intuitive and user-friendly interfaces, dedicated to assisting businesses and individuals in the realization of their objectives.
                </p>
            </div>
        </div>
    )
}
