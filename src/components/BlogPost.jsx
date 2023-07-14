import React, { useEffect, useRef, useState } from 'react'
import Pic1 from '../components/pexels-athena-2582937.jpg'
import Pic2 from '../components/pexels-harsch-shivam-2007647.jpg'
import Pic3 from '../components/pexels-thisisengineering-3861969.jpg'
import Pic4 from '../components/IMG_20220502_113543.jpg'
import {motion, useScroll} from 'framer-motion'
import {ImArrowRight2} from "react-icons/im"
import {BsFacebook} from 'react-icons/bs'



const pics = [Pic1,Pic2,Pic3];

function BlogPost() {
const ref = useRef(null);
const {scrollYProgress}= useScroll({target: ref})

const[trackY, setTrackY] = useState(0)

useEffect(() => {
    setInterval(() =>setTrackY(scrollYProgress.current ))
    console.log(scrollYProgress.current)
}, [])

  return (
    <div className='blog bg-slate-800 text-slate-200 text-xl'>
        <div className='h-[85vh] font-bold text-5xl lg:text-8xl lg:h-[75vh] flex items-end mx-9'><h1 className='mb-20 leading-[1.1]'>Influence Is The New Oil</h1></div>
        <div className='h-[80vh] overflow-hidden relative lg:h-[120vh]' ref={ref}>
            <motion.img src={Pic4} alt='' className=' object-cover absolute w-full h-full inset-0' initial={{scale:1}} whileInView={{scale: (1)+(trackY/30)}} transition={{ ease: [0.075, 0.82, 0.165, 1]}}/>
        </div>
        <div className=' lg:flex flex-row-reverse lg:text-3xl'>
        <div className='border-b-[1px] min-h-[30vh] flex flex-col justify-center border-slate-200 md:border-none lg:sticky lg:top-0 lg:h-[50vh] lg:w-2/5'>
                <div className='border-slate-200 border-b-[1px] flex items-center mx-14 justify-between pb-3'>
               <div className=' flex gap-3 items-center'>
                <img src={Pic2} alt='' width={50} height={50} className='rounded-full h-[50px]'/>
                <h1 className='font-bold'>James Lewis</h1>
               </div>
               <div className='text-slate-400'>Feb 25</div>
               </div>
            <div className='flex gap-2 my-2 mx-14 '>
                <div className='flex flex-col'>
                    <h6 className='font-bold'>Share This Article</h6>
                <div className='flex gap-8 mx-2 my-4'>
                <BsFacebook size={30}/>
                <BsFacebook size={30}/>
                <BsFacebook size={30}/>
                <BsFacebook size={30}/>
               </div>
               </div>
               </div>
        </div>
            <div className='h-full font-medium lg:border-r-[1px] border-slate-200 lg:w-3/5'>
                <div className='border-b-[1px] border-red-200 p-10 sm:p-8 md:px-10 md:py-24 lg:my-10 lg:py-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quis.</div>
                <div className='p-10 leading-[1.5]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste officia eveniet accusantium, voluptate ipsum neque magni aspernatur nulla, consectetur molestiae reprehenderit quasi maiores nihil pariatur eaque? Voluptate nulla deleniti id non debitis doloremque, fugiat quaerat dolorem officia, sequi, libero alias accusamus dolore blanditiis. Molestiae possimus accusamus error. Modi, quas similique?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque consectetur quas harum repudiandae quos blanditiis reprehenderit corrupti repellat hic cum natus ipsam dolorem, rerum modi ab atque et nihil? Recusandae, nulla quasi. Fuga maxime dolor hic et, tempore praesentium incidunt non ab blanditiis autem! Quae expedita magnam fugit harum? Iusto soluta sequi excepturi iste consequuntur explicabo eveniet ipsam quasi, veritatis tempora, quae doloremque cum dolor repellendus est praesentium sed laborum amet dolore repellat eos corporis voluptatibus. Laborum explicabo ex sunt corporis repellendus blanditiis quam? Natus fugit maiores tempore laudantium consequuntur sequi ex unde recusandae quos consequatur, enim voluptatibus! Magnam deleniti voluptatum ex voluptatem, odit itaque deserunt quas, hic nam amet dignissimos? Quidem rerum iure adipisci eos dignissimos exercitationem. Nemo omnis nulla aspernatur quo quibusdam eveniet saepe quod ab est? Iste illo fugiat voluptate aspernatur. Ipsam atque numquam explicabo libero, architecto at? Similique quo explicabo tempore voluptate accusamus autem cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque consectetur quas harum repudiandae quos blanditiis reprehenderit corrupti repellat hic cum natus ipsam dolorem, rerum modi ab atque et nihil? Recusandae, nulla quasi. Fuga maxime dolor hic et, tempore praesentium incidunt non ab blanditiis autem! Quae expedita magnam fugit harum? Iusto soluta sequi excepturi iste consequuntur explicabo eveniet ipsam quasi, veritatis tempora, quae doloremque cum dolor repellendus est praesentium sed laborum amet dolore repellat eos corporis voluptatibus. Laborum explicabo ex sunt corporis repellendus blanditiis quam? Natus fugit maiores tempore laudantium consequuntur sequi ex unde recusandae quos consequatur, enim voluptatibus! Magnam deleniti voluptatum ex voluptatem, odit itaque deserunt quas, hic nam amet dignissimos? Quidem rerum iure adipisci eos dignissimos exercitationem. Nemo omnis nulla aspernatur quo quibusdam eveniet saepe quod ab est? Iste illo fugiat voluptate aspernatur. Ipsam atque numquam explicabo libero, architecto at? Similique quo explicabo tempore voluptate accusamus autem cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque consectetur quas harum repudiandae quos blanditiis reprehenderit corrupti repellat hic cum natus ipsam dolorem, rerum modi ab atque et nihil? Recusandae, nulla quasi. Fuga maxime dolor hic et, tempore praesentium incidunt non ab blanditiis autem! Quae expedita magnam fugit harum? Iusto soluta sequi excepturi iste consequuntur explicabo eveniet ipsam quasi, veritatis tempora, quae doloremque cum dolor repellendus est praesentium sed laborum amet dolore repellat eos corporis voluptatibus. Laborum explicabo ex sunt corporis repellendus blanditiis quam? Natus fugit maiores tempore laudantium consequuntur sequi ex unde recusandae quos consequatur, enim voluptatibus! Magnam deleniti voluptatum ex voluptatem, odit itaque deserunt quas, hic nam amet dignissimos? Quidem rerum iure adipisci eos dignissimos exercitationem. Nemo omnis nulla aspernatur quo quibusdam eveniet saepe quod ab est? Iste illo fugiat voluptate aspernatur. Ipsam atque numquam explicabo libero, architecto at? Similique quo explicabo tempore voluptate accusamus autem cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque consectetur quas harum repudiandae quos blanditiis reprehenderit corrupti repellat hic cum natus ipsam dolorem, rerum modi ab atque et nihil? Recusandae, nulla quasi. Fuga maxime dolor hic et, tempore praesentium incidunt non ab blanditiis autem! Quae expedita magnam fugit harum? Iusto soluta sequi excepturi iste consequuntur explicabo eveniet ipsam quasi, veritatis tempora, quae doloremque cum dolor repellendus est praesentium sed laborum amet dolore repellat eos corporis voluptatibus. Laborum explicabo ex sunt corporis repellendus blanditiis quam? Natus fugit maiores tempore laudantium consequuntur sequi ex unde recusandae quos consequatur, enim voluptatibus! Magnam deleniti voluptatum ex voluptatem, odit itaque deserunt quas, hic nam amet dignissimos? Quidem rerum iure adipisci eos dignissimos exercitationem. Nemo omnis nulla aspernatur quo quibusdam eveniet saepe quod ab est? Iste illo fugiat voluptate aspernatur. Ipsam atque numquam explicabo libero, architecto at? Similique quo explicabo tempore voluptate accusamus autem cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque consectetur quas harum repudiandae quos blanditiis reprehenderit corrupti repellat hic cum natus ipsam dolorem, rerum modi ab atque et nihil? Recusandae, nulla quasi. Fuga maxime dolor hic et, tempore praesentium incidunt non ab blanditiis autem! Quae expedita magnam fugit harum? Iusto soluta sequi excepturi iste consequuntur explicabo eveniet ipsam quasi, veritatis tempora, quae doloremque cum dolor repellendus est praesentium sed laborum amet dolore repellat eos corporis voluptatibus. Laborum explicabo ex sunt corporis repellendus blanditiis quam? Natus fugit maiores tempore laudantium consequuntur sequi ex unde recusandae quos consequatur, enim voluptatibus! Magnam deleniti voluptatum ex voluptatem, odit itaque deserunt quas, hic nam amet dignissimos? Quidem rerum iure adipisci eos dignissimos exercitationem. Nemo omnis nulla aspernatur quo quibusdam eveniet saepe quod ab est? Iste illo fugiat voluptate aspernatur. Ipsam atque numquam explicabo libero, architecto at? Similique quo explicabo tempore voluptate accusamus autem cupiditate.</p>
                
                </div>
            </div>
        </div>
        <div className=' font-extrabold text-4xl lg:text-8xl border-t-[1px] border-slate-200 '>
            <div className='p-10 h-full'>
            <h1 className='mb-20'>There's more <br/><span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-900'>where that came from</span></h1>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-14 sm:gap-y-36 md:gap-24 md:gap-y-36 justify-center align-middle lg:p-20'>
        {pics.map((pic,index) => {
     return(
       <div className='w-full h-[40vh]  md:h-[35vh] lg:h-[50vh] ' key={Math.random(index)}>
         <motion.div className=' relative overflow-hidden w-full h-4/6' key={Math.random(index)} >
     <motion.img key={Math.random(index)} src={pic} alt=""  className="object-cover absolute w-full h-full inset-0" whileHover={{ scale: 1.2 }} transition={{duration: 2, ease: [0.075, 0.82, 0.165, 1]}}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}></motion.img>
         </motion.div>
         <div className=''>
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
            </div>
        </div>
    </div>
  )
}

export default BlogPost