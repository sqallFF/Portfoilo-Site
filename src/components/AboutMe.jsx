
import React, { useContext, useEffect } from 'react'
import { motion, useIsPresent } from 'framer-motion'
// import { AppContext } from './Context';


function AboutMe() {
  // const isPresent = useIsPresent();
  // const{spin, spinHandler, setSpin} = useContext(AppContext);
  // useEffect(() =>{

  //   setSpin(false)},[])
  
  // useEffect(() =>{
  
  //   if(isPresent === false){
  //     setSpin(true)
  //   }
   
  // },[isPresent])
  return (
    <>
    <motion.h1 className='text-4xl text-TextColor'
    initial={{opacity:0 , y:10}}
    animate={{opacity:1,y:0, transition: { duration: 0.5}}}
    exit={{opacity:0, transition: { duration: 1}}}
    >James Lewis</motion.h1>
    <motion.div
    initial={{ scaleX: 1 }}
    animate={{ scaleX: 0, transition: { duration: 3, ease: "circOut" } }}
    exit={{ scaleX: 1, transition: { duration: 3, ease: "circIn" } }}
    // style={{ originX: isPresent ? 0 : 1 }}
    className="privacy-screen"
  />
  </>
  )
}

export default AboutMe