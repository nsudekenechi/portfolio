import React from 'react'
import { Link } from 'react-router-dom'
import { SiAngularjs, SiAxios, SiBootstrap, SiExpress, SiFigma, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPhp, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandFramerMotion } from 'react-icons/tb';
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
    return (
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

            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='text-white'>
                    <h1 className='mb-5'>Languages</h1>
                    {
                        skills.languages.map((skill, index) => <div className='flex items-center gap-x-3 text-sm mb-5' key={index}>
                            <skill.icon />
                            <span>{skill.title}</span>
                        </div>)
                    }


                </div>
                <div className='text-white col-span-2'>
                    <h1 className='mb-5'>Frameworks & Others</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-x-20'>
                        <div>
                            {
                                skills.frameworks.map((skill, index) => index + 1 <= 4 && <div className='flex items-center gap-x-3 text-sm mb-5' key={index}>
                                    <skill.icon />
                                    <span>{skill.title}</span>
                                </div>)
                            }
                        </div>
                        <div>
                            {
                                skills.frameworks.map((skill, index) => index + 1 > 4 && index + 1 <= 8 && <div className='flex items-center gap-x-3 text-sm mb-5' key={index}>
                                    <skill.icon />
                                    <span>{skill.title}</span>
                                </div>)
                            }
                        </div>
                        <div>
                            {
                                skills.frameworks.map((skill, index) => index + 1 > 8 && index + 1 <= 12 && <div className='flex items-center gap-x-3 text-sm mb-5' key={index}>
                                    <skill.icon />
                                    <span>{skill.title}</span>
                                </div>)
                            }
                        </div>
                    </div>


                </div>
            </div>

            <div className='w-10 h-5 border-l border-b border-[#666] my-10'></div>

            <h1 className='text-[#888] text-xl mb-10'>Professional Experience</h1>

            <div>
                <div className="grid grid-cols-2 text-white font-Fira">
                    <div className='grid grid-cols-12 gap-x-5 items-center'>
                        <div className='col-span-2'>
                            <img src="./worldBrain.png" className='object-cover object-center' alt="" />
                        </div>
                        <div className='col-span-10'>
                            <h1 className='text-lg'>Fullstack Developer</h1>
                            <p className='text-sm text-[#888]'>World Brain Technology</p>
                            <p className='text-sm text-[#888]'>Oct 2021 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
