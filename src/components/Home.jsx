import React, {useContext, useEffect, useState} from 'react'
import { motion} from 'framer-motion'
import Pic1 from '../components/pexels-athena-2582937.jpg'
import Pic2 from '../components/pexels-harsch-shivam-2007647.jpg'
import Pic3 from '../components/pexels-thisisengineering-3861969.jpg'
import ProjectsSection from './ProjectsSection';
import BlogSection from './BlogSection';
import { MyContext } from '../MyContext'
import axios from 'axios'



function Home({isOpen}) {
//   const isPresent = useIsPresent();
// const{spin, spinHandler,setSpin} = useContext(AppContext);
// useEffect(() =>{

//   setSpin(false)},[])

// useEffect(() =>{

//   if(isPresent === false){
//     setSpin(true)
//   }
 
// },[isPresent])
const { books, imgLoaded} = useContext(MyContext);


//   },[books,isLoaded])
const pics = [Pic1,Pic2,Pic3,Pic1,Pic2,Pic3];
if (imgLoaded) {
const result = books.filter(book => book.id ===11)
console.log(result)
  return (
    <>
      <motion.div className='  text-slate-200 bg-slate-900'>
    <div className='h-[95vh] flex items-stretch p-5'>
      <div className=' w-screen text-4xl text-center md:w-3/6 md:text-5xl lg:text-6xl xl:text-8xl sm:text-left self-center' >
        <h1>A Devolper who inspires to create for <br/><span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-900'>Small Busnieess Industy and anything in between</span></h1>
      </div>
    </div>
    <ProjectsSection/>
      <div className='box h-full p-5 w-full'>
        <div className='block text-5xl xl:text-8xl font-light mb-5 leading-tight'>
      <h1 className=''>Sometimes</h1>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-900'>We Write:</h1>
      </div>
      </div>
      <BlogSection pics={pics}/>
  </motion.div>
</>
  )
}
}

export default Home