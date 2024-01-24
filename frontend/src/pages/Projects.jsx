import React from 'react'
import {motion} from "framer-motion";
export const Projects = () => {
  return (
    <motion.div initial={{ y: 70, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>

    </motion.div>
  )
}
