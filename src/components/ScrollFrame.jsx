import React, {useRef, useEffect, useState} from 'react'
import {motion, useScroll} from 'framer-motion'



function ScrollFrame() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    console.log(scrollXProgress.current);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() =>setCompleted(scrollXProgress.current *100 ))
       console.log(scrollXProgress.current)
    }, [])
    
  return (
    <>
    <div className='h-screen w-screen'>
    <motion.div className='h-[30vh] w-full flex bg-slate-900 box overflow-x-scroll'ref={ref}>
        <div className='min-w-[30vw] h-full bg-purple-600'></div>
        <div className='min-w-[30vw] h-full bg-yellow-600'></div>
        <div className='min-w-[30vw] h-full bg-red-600'></div>
        <div className='min-w-[30vw] h-full bg-purple-600'></div>
        <div className='min-w-[30vw] h-full bg-red-600'></div>
    </motion.div>
    <div className='h-[15vh] w-full border-green-500 border-y-2 items-center p-10'>
        <div className='h-[1vh] bg-slate-200  rounded-full'>
    <motion.div
    className=" h-full overflow-hidden origin-[0%] bg-red-600 rounded-full"
    style={{ width: `${completed}%`}}/>
    </div>
  </div>
  </div>
    </>
  )
}

export default ScrollFrame