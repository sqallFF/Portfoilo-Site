import React,{useEffect, useState, useContext} from 'react'
import { motion, useScroll} from 'framer-motion'
import {ImArrowRight2} from "react-icons/im"
import axios from 'axios'
import { MyContext } from '../MyContext'

function BlogCard({blog}) {
    const [Img, setImg] = useState()
    const {imgLoaded} = useContext(MyContext);
    useEffect(()=>{
      axios.get(`/wp-json/wp/v2/media/${blog.featured_media}`).then((res) => {
        const data = res.data
        setImg(data.media_details.sizes.full.source_url)
    })
  },[imgLoaded])
  return (
    <div className='p-2 min-w-[15rem] md:min-w-[30vw]' >
    <motion.div className=' relative block overflow-hidden w-full h-[75%]' >
<motion.img src={Img} alt=""  className="object-cover absolute w-full h-full inset-0" whileHover={{ scale: 1.2 }} transition={{duration: 2, ease: [0.075, 0.82, 0.165, 1]}}
onHoverStart={e => {}}
onHoverEnd={e => {}}></motion.img>
    </motion.div>
<h6 className='text-slate-400 mt-2 mb-1 text-base'>{blog.date.substring(0,11-1)}</h6>
<h3 className=' my-1 text-2xl'>{blog.title.rendered}</h3>
<div className='flex items-center gap-4'>
<button className='my-4 text-base'>Read More</button>
<ImArrowRight2/>
</div>
</div>
  )
}

export default BlogCard