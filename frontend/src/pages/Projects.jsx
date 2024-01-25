import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { SiAngularjs, SiAxios, SiBootstrap, SiCss3, SiExpress, SiFigma, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const Projects = () => {
    // Specifying how many projects should be displayed in one grid
    const numberOfGrids = [1, 2, 3]
    const [projects, setProjects] = useState(
        [
            {
                title: "RollSafer",
                desc: "Rollsafer offers car rental services, with different car categories to let you pick the perfect car for your journey at very affordable price.",
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
                title: "UCShomes",
                desc: "UCShomes is an assisted living website that offers a wide range of services and amenities designed to help  residents live independently and with dignity.",
                img: "./ucshomes.png",
                video: "./ucshomes.mp4",
                link: "https://www.ucshomes.com/",
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
                title: "Dopemind Studios",
                desc: "Dopemind studios is a music selling e-commerce website, that allows clients buy beats, samples, lyrics or songs.",
                img: "./dopemind.png",
                video: "./dopemind.mp4",
                link: "https://dopemindstudio.com/",
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
                    },
                    {
                        title: "SQL",
                        icon: SiMysql
                    }
                ],

            },
            {
                title: "Notie",
                desc: "A note creating application that offers a range of rich features like creating, editing, deleting notes, recycle bin, speech-to-text, archiving and favoriting notes.",
                img: "./notie.png",
                video: "./notie.mp4",
                link: "https://notie.vercel.app/",
                stacks: [
                    {
                        title: "React",
                        icon: SiReact
                    },
                    {
                        title: "Tailwind",
                        icon: SiTailwindcss
                    },
                    {
                        title: "Node",
                        icon: SiNodedotjs
                    },
                    {
                        title: "Mongo",
                        icon: SiMongodb
                    },
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
    console.clear()
    return (
        <motion.div initial={{ y: 70, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className='text-white'>

            <h1 className='text-[#888] text-xl mb-10 overflow-hidden'>
                <motion.p initial={{ opacity: 0, translateX: "20%" }}
                    animate={{ opacity: 1, translateX: "0%" }}
                    transition={{
                        delay: 0.2,
                        duration: 0.6,
                        ease: "anticipate"
                    }}>
                    Projects
                </motion.p>
            </h1>
            <div className='overflow-hidden'>
                <motion.div className='flex flex-col gap-y-5 text-lg text-[#fff]  leading-7 font-light' initial={{ opacity: 0, translateY: "-30%" }}
                    animate={{ opacity: 1, translateY: "0%" }}
                    transition={{
                        delay: 0.25,
                        duration: 0.4,
                        ease: "easeInOut"
                    }}>
                    <p >
                        Welcome to the portfolio of a passionate Fullstack Developer, where innovation meets functionality. With a robust foundation in both front-end and back-end technologies, I bring a wealth of expertise to the digital realm.
                    </p>

                    <p>
                        Explore a curated collection of projects that showcase my proficiency in crafting seamless user experiences and robust server-side solutions. From dynamic web applications to scalable APIs, each project reflects a commitment to cutting-edge technology and a passion for problem-solving.
                    </p>
                </motion.div>
            </div>
            <div className='w-10 h-5 border-l border-b border-[#666] my-10'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 md:gap-x-10 md:gap-y-5 overflow-hidden'>
                {
                    projects.map((project, index) => (
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} key={index}>
                            {
                                <Link key={index} to={project.link} target='_blank' className=' block relative'>
                                    <div className={`h-[200px] rounded-lg overflow-hidden relative md:z-10 z-0 ${project.isHovered && "border-2 border-white"} mb-5`} onMouseOver={() => handleHover(project.title)} onMouseOut={handleOut}>
                                        <motion.img initial={{ y: "0%" }} animate={{ y: project.isHovered ? "100%" : "0%" }} src={project.img} alt="" className='object-cover object-center h-[100%] w-[100%]' />
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: project.isHovered ? 1 : 0 }} className='bg-black/30 absolute w-[100%] h-[100%] top-0 z-0 md:z-10'>

                                        </motion.div>
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: project.isHovered ? 1 : 0 }} className='absolute w-[100%] h-[100%] top-0'>
                                            <video src={project.video} muted autoPlay loop className='w-[100%] h-[100%]'></video>
                                        </motion.div>
                                        <div className='absolute bg-black/70 backdrop-blur-[2px] h-[25%] w-[100%] bottom-0 py-2 px-3 flex z-0 md:z-20'>
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

                                    <motion.div initial={{ minHeight: "0px" }} animate={{ minHeight: project.isHovered ? "auto" : "0px" }} className={` overflow-hidden mb-10 md:mb-0  ${project.isHovered ? "block" : "hidden"}`}>
                                        <motion.p initial={{ x: "-100%" }} animate={{ x: project.isHovered ? "0%" : "-100%" }} className='text-xs font-light' >
                                            {project.desc}
                                        </motion.p>
                                    </motion.div>
                                </Link>
                            }
                        </motion.div>
                    ))
                }

            </div>

        </motion.div>
    )
}
