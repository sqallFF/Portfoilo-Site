import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

function TitleCard() {

   const container = {
    hidden: { opacity: 0, x: -40}, width: 0,
    show: {
      opacity: 1,
      x: 0,
      width:100,
      transition: {
        type: 'tween',
        duration: 2,
        delay: 0.1,
        when: 'beforeChildren',
        staggerChildren: 0.8
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -40},
    show: { opacity: 1, x:0, transition:{type: 'tween',
    ease: 'easeInOut',
    duration: 2,}},
    exit:{ opacity: 0, x: -40},
  }
  return (
    <AnimatePresence>
    <motion.div  className='text-9xl w-full overflow-hidden h-screen bg-slate-900 text-slate-200 uppercase font-extrabold '>
        <motion.div variants={container} initial='hidden' animate='show'  exit="hidden" className='absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>
        <motion.div variants={item} ><h1  className='absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>Make</h1> </motion.div>
        <motion.div variants={item}><h1  className='absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>S</h1></motion.div>
        <motion.div variants={item}><h1  className='absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>Differnce</h1></motion.div>
        </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default TitleCard