import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { SiCodecov } from "react-icons/si";
import { TbBulb } from "react-icons/tb";
import { MdOutlineCode } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";

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
      icon: BiCategory,
      to: "category",
    }

  ])

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
  }, [])

  return (
    <div className='bg-black min-h-screen grid grid-cols-10 '>
      <nav className=' '>
        <div className=" fixed px-8 flex flex-col items-center justify-between h-screen top-0 py-10">
          <NavLink to={""} className='border border-white flex justify-center items-center  h-14 w-14 rounded-full'>
            <SiCodecov color='white' size={30} />
          </NavLink>
          <ul className='bg-[#111]  w-[100%] rounded-full py-5 text-[#666] flex flex-col items-center gap-y-8 shadow-inputShadow '>
            {
              links.map((link, index) =>
                <NavLink key={index} to={link.to} className={({ isActive }) => `${isActive ? 'text-white bg-blue-600 p-2 rounded-full' : 'hover:text-white '} relative`} onMouseOver={() => handleShowLinks(link.to)} onMouseOut={() => handleHideLinks(link.to)}><link.icon className=' hover:rotate-[360deg] duration-1000' size={20} />
                  <div className={'overflow-hidden  absolute top-[50%] translate-y-[-50%] left-[50px] '}>
                    <p className={`${link.isHovered ? "translate-x-[0%] opacity-100" : "translate-x-[-100%] opacity-0"} text-sm text-white capitalize duration-500 font-[poppins]`}>{link.to ? link.to : "home"}
                    </p>
                  </div>
                </NavLink>
              )
            }
          </ul>

          <div className='flex justify-center items-center text-white w-10 h-10 bg-blue-500 rounded-full text-lg'>
          </div>
        </div>
      </nav>
      <div className='col-span-9 py-10 pr-10'>
        <Outlet />
      </div>
    </div>
  )
}
