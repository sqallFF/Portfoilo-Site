import React from 'react'
import Pic1 from '../components/pexels-athena-2582937.jpg'
import Pic2 from '../components/pexels-harsch-shivam-2007647.jpg'
import Pic3 from '../components/pexels-thisisengineering-3861969.jpg'
import Pic4 from '../components/IMG_20220502_113543.jpg'
import {motion} from 'framer-motion'
import {ImArrowRight2} from "react-icons/im"

const pics = [Pic1,Pic2,Pic3,Pic2,Pic4,Pic1];
function BlogSectionLong() {
  return (
    <section className='min-w-[auto] mx-9 sm:mx-16 w-auto 2xl:w-[76vw] pt-20'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-cols-[1fr] grid-rows-[auto] gap-x-[4vw] gap-y-[12vw] md:grid-cols-[1fr,1fr] md:gap-y-[4vw]'>
        {pics.map((pic,index) => {
     return(
       <div>
         <motion.div className=' relative block overflow-hidden pt-[120%] sm:pt-[70%]' key={Math.random(index)} >
     <motion.img key={Math.random(index)} src={pic} alt="" sizes="(max-width: 479px) 75vw, (max-width: 767px) 41vw, (max-width: 991px) 42vw, (max-width: 1279px) 43vw, (max-width: 1919px) 44vw, 36vw" className="object-cover absolute w-full h-full inset-0 max-w-full border-0 align-middle" whileHover={{ scale: 1.2 }} transition={{duration: 2, ease: [0.075, 0.82, 0.165, 1]}}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}></motion.img>
         </motion.div>
         <div className='p-2 flex flex-col justify-between ' key={Math.random(index)}>
     <h6 className='text-slate-400 mt-2 mb-1 text-base'key={Math.random(index)}>Feb25</h6>
     <h3 className=' my-1 text-2xl'key={Math.random(index)}>This is a Title</h3>
     <div className='flex items-center gap-4' key={Math.random(index)}>
     <button className='my-4 text-base'key={Math.random(index)}>Read More</button>
     <ImArrowRight2 key={Math.random(index)}/>
     </div>
     </div>
     </div>
     )
    })}
        </div>
        </section>
  )
}

export default BlogSectionLong