import React, {useRef, useEffect, useState, useContext} from 'react'
import {motion, useScroll} from 'framer-motion'
import ProjectCard from './ProjectCard'
import { MyContext } from '../MyContext'


function ProjectsSection({pics, Books}) {
  const ref = useRef(null);
  const range = useRef(null);

  const { scrollXProgress } = useScroll({ container: ref });
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() =>setCompleted(scrollXProgress.current *100 ))
}, [])

const handleChange = (e) => {
const element = ref.current
const total = element.scrollWidth - element.offsetWidth;
        const percentage = total * (e.target.value / 100);
        element.scrollLeft = percentage;
}

const { books, Techs, isLoaded, ImgData, imgLoaded} = useContext(MyContext);


  return (
    <>
    <div className=' h-[17vh] sm:h-[35vh] w-full border-t-[1px] text-6xl xl:text-8xl  flex justify-center sm:justify-start items-center border-slate-300 '>
      <h1 className=''>Projects</h1>
    </div>
    <motion.div className=' Sbar h-[80vh] md:h-[91vh] box w-full flex border-t-[1px] border-b-[1px] border-slate-300 overflow-x-scroll'ref={ref}>
    { books.map((book)=>{
       return(
         <>
         <ProjectCard key={book.id} title={book.title.rendered} bookId={book.id} media={book}/>
         </>
       )
     })}
      </motion.div>
    <div className='h-[15vh] w-full border-slate-300 border-y-2 p-15 flex justify-center items-center'>
        <input type='range' className='h-[1vh] w-5/6 pro rounded-full' ref={range} min={0} max={100} value={completed} onChange={handleChange} style={{appearance:'none'}}/>
    {/* <motion.div
    className=" h-full overflow-hidden origin-[0%] bg-purple-100 rounded-full"
    style={{ width: `${completed}%`}}/> */}
  </div>
   </>
  )
}

export default ProjectsSection