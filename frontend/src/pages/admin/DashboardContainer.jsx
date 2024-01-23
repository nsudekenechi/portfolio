import React, { useContext } from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { SiCodecov } from "react-icons/si";
import { TbBulb } from "react-icons/tb";
import { MdOutlineCode } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
import { Store } from '../../context/context';

export const DashboardContainer = () => {
  const { store } = useContext(Store)
  console.log(store)
  const links = [
    {
      icon: MdOutlineCode,
      to: ""
    },
    {
      icon: TbBulb,
      to: "projects"
    },
    {
      icon: BiCategory,
      to: "category",
    },
    {
      icon: RiHomeLine,
      to: "home"
    }
  ]
  return (
    <div className='bg-black min-h-screen grid grid-cols-10 '>
      <nav className=' '>
        <div className=" fixed px-8 flex flex-col items-center justify-between h-screen top-0 py-10">
          <NavLink to={""} className='border border-white flex justify-center items-center  h-14 w-14 rounded-full'>
            <SiCodecov color='white' size={30} />
          </NavLink>
          <ul className='bg-[#111]  w-[100%] rounded-full py-5 text-[#666] flex flex-col items-center gap-y-8 shadow-inputShadow '>
            {
              links.map(link =>
                <NavLink to={link.to} className={({ isActive }) => isActive ? 'text-white bg-blue-600 p-1 rounded-2xl' : 'hover:text-white '}><link.icon size={20} /></NavLink>
              )
            }
          </ul>

          <div className='flex justify-center items-center text-white w-10 h-10 bg-blue-500 rounded-full text-lg'>
            {store.user?.user?.username?.slice(0,2)}
          </div>
        </div>
      </nav>
      <div className='col-span-9 py-10 pr-10'>
        <Outlet />
      </div>
    </div>
  )
}
