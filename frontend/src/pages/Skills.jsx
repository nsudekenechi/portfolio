import React from 'react'
import { Link } from 'react-router-dom'
import { SiAngularjs, SiAxios, SiBootstrap, SiExpress, SiFigma, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPhp, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandFramerMotion } from 'react-icons/tb';
import { motion } from "framer-motion"
export const Skills = () => {
    const skills = {
        languages: [

            {
                icon: SiJavascript,
                title: "Javascript"
            },
            {
                icon: SiMysql,
                title: "SQL"
            },
            {
                icon: SiTypescript,
                title: "Typescript"
            },
            {
                icon: SiPhp,
                title: "PHP"
            }
        ],
        frameworks: [
            {
                icon: SiReact,
                title: "React"
            },
            {
                icon: SiNextdotjs,
                title: "Next"
            },
            {
                icon: SiAngularjs,
                title: "AngularJs"
            },
            {
                icon: SiTailwindcss,
                title: "Tailwind"
            },
            {
                icon: SiBootstrap,
                title: "Bootstrap"
            },
            {
                icon: SiRedux,
                title: "Redux"
            },
            {
                icon: TbBrandFramerMotion,
                title: "Framer Motion"
            },
            {
                icon: SiAxios,
                title: "Axios"
            },
            {
                icon: SiNodedotjs,
                title: "Node"
            },
            {
                icon: SiExpress,
                title: "Express"
            },
            {
                icon: SiMongodb,
                title: "Mongo"
            }


        ]
    }

    const experiences = [
        {
            role: "Fullstack Developer",
            company: "World Brain Technology",
            img: "./worldBrain.png",
            date: "Oct 2021 - Present",
            roles: ["Implement RESTful APIs for seamless communication between the front-end and back-end components using Node and Express", "Design and optimize database schemas for efficient data storage and retrieval with mongoDB", "Collaborate  with UI/UX designers to implement visually appealing and intuitive interfaces.", "Developed user-friendly interfaces for a school portal using React, Tailwind, Framer Motion and other latest technologies."]
        },
        {
            role: "Frontend Developer",
            company: "FloxyTech",
            img: "./floxyTech.png",
            date: "Apr 2022 - Present",
            roles: ["Collaborated with the design team to implement Figma designs", "Worked with backend developers to integrate frontend components with server-side logic", "Worked on the company's first official website, ensure responsiveness on major devices and accesibility on browers", ""]
        },

        {
            role: "Web Development Tutor",
            company: "Aptech Computer Education",
            img: "./aptech.png",
            date: "Jan 2022 - Present",
            roles: ["Tutored Over 100 students in technologies like: Html, Css, Javascript, AngularJs, Microsoft Sql Server, UI/UX, OOP",
                "Implemented teaching strategies to enhance students learning process and encourage a healthy competition among students",
                "Successfully led and organized a quiz competition among students in the year 2023."
            ]
        }
    ]
    return (
        <motion.div initial={{ y: 70, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
            <div className='md:pr-20 '>

                <h1 className='text-[#888] text-xl mb-10'>About me</h1>
                <div className='flex flex-col gap-y-5 text-lg text-[#fff]  leading-7 font-light'>
                    <p >
                        With over 3 years of experience, I am a seasoned fullstack developer, with relentless pursuit for excellence and an insatiable curiosity for emerging technologies.
                        I possess expertise in the development of intuitive and user-friendly interfaces, dedicated to assisting businesses and individuals in the realization of their objectives.
                    </p>

                    <p>As a seasoned fullstack developer, I have an expertise level in both Javascript and PHP,  allowing me to build complex and secure systems while providing user-centric interface.   My distinguished track record, (as you will see in the <Link to={"/projects"}>Projects Section</Link>) for building innovative solutions for individuals, small and large business entities and various stake holders.</p>
                </div>


                <div className='w-10 h-5 border-l border-b border-[#666] my-10'></div>

                <h1 className='text-[#888] text-xl mb-10'>Skills</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10'>
                    <div className='text-white'>
                        <h1 className='mb-5'>Languages</h1>
                        {
                            skills.languages.map((skill, index) => <motion.div className='flex items-center gap-x-3 text-sm mb-5' key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                <skill.icon />
                                <span>{skill.title}</span>
                            </motion.div>)
                        }


                    </div>
                    <div className='text-white col-span-2'>
                        <h1 className='mb-5'>Frameworks & Others</h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-5'>
                            <div>
                                {
                                    skills.frameworks.map((skill, index) => index + 1 <= 4 && <motion.div className='flex items-center gap-x-3 text-sm mb-5' key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                                    >
                                        <skill.icon />
                                        <span>{skill.title}</span>
                                    </motion.div>)
                                }
                            </div>
                            <div>
                                {
                                    skills.frameworks.map((skill, index) => index + 1 > 4 && index + 1 <= 8 && <motion.div className='flex items-center gap-x-3 text-sm mb-5' key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                        <skill.icon />
                                        <span>{skill.title}</span>
                                    </motion.div>)
                                }
                            </div>
                            <div>
                                {
                                    skills.frameworks.map((skill, index) => index + 1 > 8 && index + 1 <= 12 && <motion.div className='flex items-center gap-x-3 text-sm mb-5' key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                        <skill.icon />
                                        <span>{skill.title}</span>
                                    </motion.div>)
                                }
                            </div>
                        </div>


                    </div>
                </div>

                <div className='w-10 h-5 border-l border-b border-[#666] my-10'></div>

                <h1 className='text-[#888] text-xl mb-10'>Professional Experience</h1>

                <div>
                    {
                        experiences.map((experience, index) => (
                            <div key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 text-white font-Fira " >
                                    <div className='grid grid-cols-12 gap-x-5 '>
                                        <div className='col-span-4 md:col-span-2'>
                                            <img src={experience.img} className='object-cover object-center' alt="" />
                                        </div>
                                        <div className=' col-span-8 md:col-span-10'>
                                            <h1 className='text-lg mb-3'>{experience.role}</h1>
                                            <p className='text-sm text-[#888]'>{experience.company}</p>
                                            <p className='text-sm text-[#888]'>{experience.date}</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-[#888] mb-3'>Roles</h1>
                                        <ul className='font-light flex flex-col gap-y-5'>
                                            {
                                                experience.roles.map((role, index) => <motion.li key={index} initial={{ y: 50, opacity:0 }} whileInView={{ y: 0, opacity:1 }}>{role}</motion.li>)
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className='py-20 px-20'>
                                    <div className='h-1 border-b border-b-[#333]'></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}
