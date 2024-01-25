import React, { useState } from 'react'
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
export const Contact = () => {
  const [inputs, setInputs] = useState({
    from_name: "",
    from_email: "",
    message: ""
  })
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, inputs, import.meta.env.VITE_PUBLICKEY,)
      .then(function (response) {
        toast.success(`I will get back to you shortly`);
      }, function (error) {
        toast.error("Something went wrong, Please try again")
      }).finally(() => {
        setInputs({
          from_name: "",
          from_email: "",
          message: ""
        })
      });

  }
  return (
    <motion.div initial={{ y: 70, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className='text-white'>
      <h1 className='text-[#888] text-xl mb-10 overflow-hidden'>
        <motion.p
          initial={{ opacity: 0, translateX: "20%" }}
          animate={{ opacity: 1, translateX: "0%" }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "anticipate"
          }}>
          Contact me
        </motion.p>
      </h1>
      <div className='flex flex-col gap-y-5 text-lg text-[#fff]  leading-7 font-light'>
        <div className='relative'>
          <p className='text-4xl font-extrabold mb-4'>
            I strive for the best in everything I create.
          </p>
          <p className='text-3xl relative'>
            Let's Get In Touch
            <motion.div 
            initial={{ height: "100%", width: "100%" }} 
            animate={{ width: "0%" }}
            transition={{delay: 0.5, duration: 0.5, ease:"anticipate"}}
             className="absolute  bg-black top-0 right-0"></motion.div>
          </p>

        </div>
        <div className='w-10 h-5 border-l border-b border-[#666] my-10'></div>
        <form action="" className='' onSubmit={sendEmail}>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-x-10 gap-y-10">
            <div>
              <div className='mb-2 '>
                <label htmlFor="" className='text-sm'>Name</label>
              </div>
              <input type="text" className='text-sm  w-[100%] py-3 px-5 outline-none  bg-[#222] rounded-md' required name='from_name' onChange={handleChange} value={inputs.from_name} />
            </div>

            <div>
              <div className='mb-2 '>
                <label htmlFor="" className='text-sm'>Email</label>
              </div>
              <input type="text" className='text-sm  w-[100%] py-3 px-5 outline-none  bg-[#222] rounded-md' required name='from_email' onChange={handleChange} value={inputs.from_email} />
            </div>

            <div className='md:col-span-2 mb-5'>
              <div className='mb-2 flex items-center gap-x-2'>
                <label htmlFor="" className='text-sm'>Send me a message</label>
              </div>
              <textarea name="message" onChange={handleChange} id="" className='text-sm w-[100%] bg-[#222]  resize-none outline-none py-3 px-5 rounded-md h-[300px]' required value={inputs.message}>


              </textarea>
            </div>
          </div>

          <button className='flex gap-x-2 text-sm font-light items-center py-2 px-5 bg-blue-600'>Send Message <MdEmail /></button>
        </form>

      </div>
      <ToastContainer />
    </motion.div>
  )
}
