import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { SiCodecov } from "react-icons/si";
import { TbBulb } from "react-icons/tb";
import { MdOutlineCode } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion"
export const HomeContainer = () => {

  const [links, setLinks] = useState([
    {
      icon: RiHomeLine,
      to: "",
    },
    {
      icon: MdOutlineCode,
      to: "skills",

    },
    {
      icon: TbBulb,
      to: "projects"

    },
    {
      icon: MdMail,
      to: "contact",
    }

  ])
  const [cv, setCv] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [hideNav, setHideNav] = useState(true);
  const { pathname } = useLocation()
  const handleShowLinks = (to) => {
    let newLinks = [...links].map(link => ({ ...link, isHovered: link.to == to ? true : false }));
    setLinks(newLinks)
  }

  const handleHideLinks = (to) => {
    let newLinks = [...links].map(link => ({ ...link, isHovered: false }));
    setLinks(newLinks);
  }
  
  useEffect(() => {
    setLinks(prev => prev.map(link => ({ ...link, isHovered: false })))
    window.onscroll = (e) => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }

  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setHideNav(true);
  }, [pathname])

  return (
    <div className='bg-black min-h-screen grid grid-cols-1 md:grid-cols-10 '>
      {/* Desktop Nav */}
      <nav className=' hidden md:block'>
        <div className="bg- fixed px-3 md:px-8 flex flex-col items-center justify-between h-screen top-0 py-10">
          <NavLink to={""} className='border border-white flex justify-center items-center  h-14 w-14 rounded-full'>
            <SiCodecov color='white' size={30} />
          </NavLink>
          <ul className='bg-[#111]  w-[100%] rounded-full py-5 text-[#666] flex flex-col items-center gap-y-8 shadow-inputShadow '>
            {
              links.map((link, index) =>
                <NavLink key={index} to={link.to} className={({ isActive }) => `${isActive ? 'text-white bg-blue-600 p-2 rounded-full' : 'hover:text-white '} relative duration-100`} onMouseOver={() => handleShowLinks(link.to)} onMouseOut={() => handleHideLinks(link.to)}><link.icon className=' hover:rotate-[360deg] duration-1000' size={20} />
                  <div className={'overflow-hidden  absolute top-[50%] translate-y-[-50%] left-[50px] '}>
                    <p className={`${link.isHovered ? "translate-x-[0%] opacity-100 bg-blue-600 py-1 px-3 md:bg-transparent md:py-0 md:px-0 rounded-full" : "translate-x-[-100%] opacity-0"} text-xs text-white capitalize duration-500 font-[poppins]`}>{link.to ? link.to : "home"}
                    </p>
                  </div>
                </NavLink>
              )
            }
          </ul>

          <div className='flex justify-center items-center text-white w-10 h-10 bg-blue-500  text-lg rounded-full overflow-hidden'>
            <img src="./kenechi.jpg" alt="" className='w-[100%] h-[100%] object-cover scale-125 ' />
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className={`${isScroll ? "bg-black/70 backdrop-blur-md px-5 py-5 " : " px-5 py-3"}   duration-700 block md:hidden bg-transparent sticky top-0 text-black z-10`} >
        <div className='flex flex-col gap-y-3 py-2 z-50 relative cursor-pointer' onClick={() => setHideNav(!hideNav)}>
          <span className={`relative duration-500 inline-block w-10 border-b-4 rounded-full ${hideNav ? "rotate-0" : "rotate-45  top-[10px]"}`}></span>
          <span className={`relative duration-500 inline-block w-10 border-b-4 rounded-full ${hideNav ? "rotate-0" : "-rotate-45   -top-[5px]"}`}></span>
        </div>
        <motion.div initial={{ scale: 0 }} animate={{ scale: hideNav ? 0 : 1 }} className="fixed px-3 md:px-8 flex flex-col items-center justify-center h-screen top-0 py-10 ">

          <ul className='bg-[#fff]  w-[100%] rounded-full py-5 px-2 text-[#666] flex flex-col items-center gap-y-8 md:shadow-inputShadow  shadow-lg'>
            {
              links.map((link, index) =>
                <NavLink key={index} to={link.to} className={({ isActive }) => `${isActive ? 'text-white bg-blue-600 p-2 rounded-full' : ''} relative duration-100  z-30`} onMouseOver={() => handleShowLinks(link.to)} onMouseOut={() => handleHideLinks(link.to)}><link.icon className=' hover:rotate-[360deg] duration-1000' size={20} />
                  <div className={'overflow-hidden  absolute top-[50%] translate-y-[-50%] left-[50px] '}>
                    <p className={`${link.isHovered ? "translate-x-[0%] opacity-100 bg-blue-600 py-1 px-3 md:bg-transparent md:py-0 md:px-0 rounded-full" : "translate-x-[-100%] opacity-0"} text-xs text-white capitalize duration-500 font-[poppins]`}>{link.to ? link.to : "home"}
                    </p>
                  </div>
                </NavLink>
              )
            }
          </ul>


        </motion.div>
      </nav>
      <AnimatePresence>
        <div className='p-5 md:col-span-9 md:p-10 md:pr-20  font-[poppins]'>
          <Outlet />
        </div>
      </AnimatePresence>
      <a className='fixed z-20 w-[60px] h-[60px] md:w-[40px] md:h-[40px] bg-blue-600 top-[85%] right-5 rounded-full flex justify-center items-center download text-white hover:w-[100px]  hover:h-[40px]  duration-700 hover:shadow-inputShadow' download={""} href={"./cv.pdf"} onMouseOver={() => setCv(true)} onMouseOut={() => setCv(false)}>
        {!cv ? <ImProfile size={15} /> : <span className={`text-nowrap text-sm md:text-xs duration-1000 ${cv ? "opacity-100" : "opacity-0"}`}>Download Cv</span>}

      </a>
    </div>
  )
}
