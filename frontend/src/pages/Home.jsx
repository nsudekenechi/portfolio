import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <motion.div initial={{ y: 70, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>

            <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='col-span-2'>
                    <h1 className=' text-[5rem] md:text-[5rem] lg:text-[6rem] font-bold mb-2 font-Fira  relative'>
                        <span className='relative'>
                            Kenechi
                            <motion.div className=' absolute bg-black  right-0 top-[0%] ' initial={{ width: "100%", height: "100%" }} animate={{ width: "0%" }} transition={{ duration: 0.5 }}></motion.div>
                        </span>
                        <br />
                        <span className='relative'>
                            <span className='border-b border-b-blue-600 '>N</span>sude.
                            <motion.div className=' absolute bg-black  left-0 top-[0%] ' initial={{ width: "100%", height: "100%" }} animate={{ width: "0%" }} transition={{ duration: 0.65, ease: "easeInOut" }}></motion.div>
                        </span>

                    </h1>
                    <h1 className='text-xl md:mb-10 relative'>
                        FullStack Developer
                        <motion.div className=' absolute   left-0 top-[0%] ' initial={{ width: "30%", height: "100%", background: "rgb(37, 99, 235)" }} animate={{ width: "0%", background: ["rgb(37, 99, 235)", "rgb(37, 99, 235)", "rgb(0, 0, 0)"] }} transition={{ duration: 1, ease: "anticipate" }}></motion.div>

                    </h1>
                    <div className='py-10 flex gap-x-5 items-center'>
                        <Link className='flex gap-x-2 items-center hover:-translate-y-0.5 duration-700 hover:text-purple-800 text-sm'>
                            <FaGithub size={20} />
                            <span className='text-[#777]'>GitHub</span>
                        </Link>
                        <Link className='flex gap-x-2 items-center hover:-translate-y-0.5 hover:text-blue-400 duration-700 text-sm'>
                            <FaLinkedinIn size={20} />
                            <span className='text-[#777]'>LinkedIn</span>
                        </Link>
                        <Link className='flex gap-x-2 items-center hover:-translate-y-0.5 hover:text-blue-600 duration-700  text-sm'>
                            <FaTwitter size={20} />
                            <span className='text-[#777]'>Twitter</span>
                        </Link>
                    </div>
                </div>
                <div className='font-[poppins] overflow-hidden'>
                    <motion.p
                        initial={{ opacity: 0, translateX: "20%" }}
                        animate={{ opacity: 1, translateX: "0%" }}
                        transition={{
                            delay: 0.4,
                            duration: 0.7,
                            ease:"anticipate"
                        }}
                        className='text-2xl text-[#888] mb-10' >Hello, There 👋</motion.p>
                    <p className='leading-7 overflow-hidden'>
                        <motion.p  
                         initial={{ opacity: 0, translateY: "-100%" }}
                        animate={{ opacity: 1, translateY: "0%" }}
                        transition={{
                            delay: 0.65,
                            duration: 0.8,
                            ease:"circOut"
                        }}>
                            My name is Kenechi Nsude, a fullstack developer with a flair for building innovative solutions for both individuals and large businesses.
                        </motion.p>
                       
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
