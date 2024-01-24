import React from 'react'
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
export const Contact = () => {
  return (
    <motion.div initial={{ y: 70, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className='text-white'>
      <h1 className='text-[#888] text-xl mb-10'>Contact me</h1>
      <div className='flex flex-col gap-y-5 text-lg text-[#fff]  leading-7 font-light'>
        <p className='text-4xl font-extrabold'>
          I strive for the best in everything I create.
        </p>
        <p className='text-3xl'>Let's Get In Touch</p>
        <div className='w-10 h-5 border-l border-b border-[#666] my-10'></div>
        <form action="" className=''>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-x-10 gap-y-10">
            <div>
              <div className='mb-2 '>
                <label htmlFor="" className='text-sm'>Name</label>
              </div>
              <input type="text" className='text-sm  w-[100%] py-3 px-5 outline-none  bg-[#222] rounded-md' required/>
            </div>

            <div>
              <div className='mb-2 '>
                <label htmlFor="" className='text-sm'>Email</label>
              </div>
              <input type="text" className='text-sm  w-[100%] py-3 px-5 outline-none  bg-[#222] rounded-md' required/>
            </div>

            <div className='md:col-span-2 mb-5'>
              <div className='mb-2 flex items-center gap-x-2'>
                <label htmlFor="" className='text-sm'>Send me a message</label>
              </div>
              <textarea name="" id="" className='text-sm w-[100%] bg-[#222]  resize-none outline-none py-3 px-5 rounded-md h-[300px]' required></textarea>
            </div>
          </div>
          
          <button className='flex gap-x-2 text-sm font-light items-center py-2 px-5 bg-blue-600'>Send Message <MdEmail /></button>
        </form>

      </div>
    </motion.div>
  )
}
