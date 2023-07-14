import React, {useEffect, useRef, useState,useContext} from 'react'
import { motion, useScroll} from 'framer-motion'
import {ImArrowRight2} from "react-icons/im"
import { MyContext } from '../MyContext'
import BlogCard from './BlogCard';

function BlogSection({pics}) {
  const ref = useRef(null);
  const range = useRef(null);
const { scrollXProgress } = useScroll({ container: ref });
const [completed, setCompleted] = useState(0);
const { blogs, Techs, isLoaded, ImgData} = useContext(MyContext);
useEffect(() => {
setInterval(() =>setCompleted(scrollXProgress.current *100 ))
}, [])

const handleChange = (e) => {
  const element = ref.current
  const total = element.scrollWidth - element.offsetWidth;
          const percentage = total * (e.target.value / 100);
          element.scrollLeft = percentage;
  }

  return (
    <>
    <div className=' box flex h-[60vh] md:h-[65vh] gap-x-6 p-2 md:gap-x-32 justify-start overflow-x-scroll' ref={ref}>
    {blogs.map((blog) => {
     return(
   <BlogCard blog={blog}/>
     )
    })}
 </div>
  <div className='h-[15vh] w-full border-slate-300 border-b-2 p-15 flex justify-center items-center mt-3'>
  <input type='range' className='h-[1vh] w-5/6 pro rounded-full' ref={range} min={0} max={100} value={completed} onChange={handleChange} style={{appearance:'none'}}/>
</div>
</>
  )
}

export default BlogSection