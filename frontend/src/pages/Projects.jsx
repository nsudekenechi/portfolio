import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { SiAngularjs, SiAxios, SiBootstrap, SiCss3, SiExpress, SiFigma, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPhp, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const Projects = () => {
    // Specifying how many projects should be displayed in one grid
    const numberOfGrids = [1, 2, 3]
    const [projects, setProjects] = useState(
        [
            {
                title: "RollSafer",
                desc: "Welcome to RollSafer – your premier destination for hassle-free and reliable car rentals! At RollSafer, we understand that every journey is unique, and we strive to provide you with the perfect vehicle to make your travels memorable and stress-free.",
                img: "./rollsafer.png",
                video: "./rollsafer.mp4",
                link: "https://roll-safer.vercel.app/",
                stacks: [{
                    title: "React",
                    icon: SiReact
                },
                {
                    title: "Tailwind",
                    icon: SiTailwindcss
                },
                {
                    title: "Framermotion",
                    icon: TbBrandFramerMotion
                },
                ],

            },
            {
                title: "Piggyvest",
                desc: "PiggyVest is a very secure online savings platform that makes saving possible by combining discipline plus flexibility to make you grow your savings.",
                img: "./piggyvest.png",
                video: "./piggyvest.mp4",
                link: "https://piggy-vest-clone.vercel.app/",
                stacks: [
                    {
                        title: "Next",
                        icon: SiNextdotjs
                    },
                    {
                        title: "React",
                        icon: SiReact
                    },
                    {
                        title: "Redux",
                        icon: SiRedux
                    }
                ],

            },
            {
                title: "Ultiblob",
                desc: "Ultiblob is a leading technology solutions provider focused on providing highly available and scalable application infrastructure for business, education, healthcare and finance institutions inside and outside of the United states.",
                img: "./ultiblob.png",
                video: "./ultiblob.mp4",
                link: "https://ultiblob.com/",
                stacks: [
                    {
                        title: "Bootstrap",
                        icon: SiBootstrap
                    },
                    {
                        title: "AOS",
                        icon: SiReact
                    },
                    {
                        title: "PHP",
                        icon: SiPhp
                    }
                ],

            },
            {
                title: "Ultiblob",
                desc: "Ultiblob is a leading technology solutions provider focused on providing highly available and scalable application infrastructure for business, education, healthcare and finance institutions inside and outside of the United states.",
                img: "./ultiblob.png",
                video: "./ultiblob.mp4",
                link: "https://ultiblob.com/",
                stacks: [
                    {
                        title: "Bootstrap",
                        icon: SiBootstrap
                    },
                    {
                        title: "AOS",
                        icon: SiReact
                    },
                    {
                        title: "PHP",
                        icon: SiPhp
                    }
                ],

            },
            
        ]
    )
    const handleHover = (title) => {
        const newProjects = [...projects].map(item => ({ ...item, isHovered: item.title == title ? true : false }))
        setProjects(newProjects)
    }
    const handleOut = () => {
        const newProjects = [...projects].map(item => ({ ...item, isHovered: false }))
        setProjects(newProjects)
    }
    useEffect(() => {
        setProjects(projects => projects.map(item => ({ ...item, isHovered: false })))
    }, [])
    return (
        <motion.div initial={{ y: 70, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className='text-white'>

            <h1 className='text-[#888] text-xl mb-10'>Projects</h1>
            <div className='flex flex-col gap-y-5 text-lg text-[#fff]  leading-7 font-light'>
                <p >
                    Welcome to the portfolio of a passionate Fullstack Developer, where innovation meets functionality. With a robust foundation in both front-end and back-end technologies, I bring a wealth of expertise to the digital realm.
                </p>

                <p>
                    Explore a curated collection of projects that showcase my proficiency in crafting seamless user experiences and robust server-side solutions. From dynamic web applications to scalable APIs, each project reflects a commitment to cutting-edge technology and a passion for problem-solving.
                </p>
            </div>
            <div className='w-10 h-5 border-l border-b border-[#666] my-10'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 md:gap-x-10'>
                {
                    numberOfGrids.map((item, index) => {
                        let project = projects[index * 1];
                        
                        return <div key={item}>
                            {


                                <Link key={index} to={project.link} target='_blank' className='mb-10 block'>
                                    <div className={`${(index + 1) % 2 == 0 ? "h-[200px] " : "h-[200px] "} rounded-lg overflow-hidden relative ${project.isHovered && "border-2 border-white"} mb-5`} onMouseOver={() => handleHover(project.title)} onMouseOut={handleOut}>
                                        <motion.img initial={{ y: "0%" }} animate={{ y: project.isHovered ? "100%" : "0%" }} src={project.img} alt="" className='object-cover object-center h-[100%] w-[100%]' />
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: project.isHovered ? 1 : 0 }} className='bg-black/30 absolute w-[100%] h-[100%] top-0 z-10'>

                                        </motion.div>
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: project.isHovered ? 1 : 0 }} className='absolute w-[100%] h-[100%] top-0'>
                                            <video src={project.video} muted autoPlay loop className='w-[100%] h-[100%]'></video>
                                        </motion.div>
                                        <div className='absolute bg-black/70 backdrop-blur-[2px] h-[25%] w-[100%] bottom-0 py-2 px-3 flex z-20'>
                                            <div className='flex items-center gap-x-2'>
                                                <div className='h-[60%] w-[1px] border-l-[3px] rounded-full border-l-blue-500'></div>
                                                <div>
                                                    <h1 className='text-xs  '>{project.title}</h1>
                                                    <div className="flex gap-x-1 text-[10px] font-light">
                                                        {
                                                            project.stacks.map((stack, index) => <span className='flex items-center gap-x-1' key={index}>{stack.title} <stack.icon /></span>)
                                                        }


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <motion.div initial={{ minHeight: "0px" }} animate={{ minHeight: project.isHovered ? "auto" : "0px" }} className={` overflow-hidden ${project.isHovered ? "block" : "hidden"}`}>
                                        <motion.p initial={{ x: "-100%" }} animate={{ x: project.isHovered ? "0%" : "-100%" }} className='text-xs font-light' >
                                            {project.desc}
                                        </motion.p>
                                    </motion.div>
                                </Link>
                            }
                        </div>
                    })
                }

            </div>

        </motion.div>
    )
}
