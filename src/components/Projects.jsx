import React from 'react'
import { motion } from 'framer-motion'


function Projects() {
  return (
        <motion.h1
        initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >Projects</motion.h1>
  )
}

export default Projects