import React, {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {IoIosArrowDropdown} from 'react-icons/io'

const Techs = ["asdfv","asdfv","asdfv","asdfv","asdfv","asdfv",4,3,2,4]


function FilterPractice() {
    const [showStack, setShowStack] = useState(false);

    const container = {
        hidden: {opacity:0, height:0, width:0, transition:{ when: 'afterChildren', duration: 0.5,staggerChildren: -0.2
            }},
        show: {
            opacity:1, width:'auto', height: "auto", transition:{  duration: 1, when:"beforeChildren",
            staggerChildren: 0.2}
        }
      }
      const container2 = {
       click:{transition:{  duration: 0.3,
       staggerChildren: 0.2,}}
      }
    const item = {
        hidden: { opacity: 0,width:'0%', transition:{ duration: 0.5,ease: "anticipate"}},
        show: { opacity: 1, width:'100%', transition:{ duration: 1,ease: "anticipate"}}
      }
      const item2 = {
        hidden: { opacity: 0,height:"0%", transition:{ duration: .3,ease: "anticipate"}},
        show: { opacity: 1, height: "100%", transition:{ duration: 1,ease: "anticipate"}}
      }

      const item3 = {
        click: { x: 30, rotate:["180deg","0deg"], transition:{ duration: .3,ease: "anticipate",}},
      }
      const item4 = {
        click: { x: 30, rotate:["0deg","180deg"], transition:{ duration: .3,ease: "anticipate",}},
      }
  return (
    <div className=''>
    <motion.button
     className='rounded-[50px] flex justify-center items-center align-middle font-bold text-lg px-3.5 text-center min-h-[48px] w-[30vw] border-slate-200 border-2 mb-6 mt-36' onClick={() =>{setShowStack(!showStack)}} whileTap="click" variants={container2}>
        Filter
        <motion.div variants={showStack ? item4 : item3} ><IoIosArrowDropdown/></motion.div>
        </motion.button>
    <AnimatePresence>
      {showStack && (
      <motion.div layout className={`overflow-hidden`} variants={container} initial='hidden' animate='show' exit='hidden'>
        <motion.div variants={item} className='border-t-[1px] border-fuchsia-900 '></motion.div>
        <motion.div variants={item2} className='py-8 flex flex-wrap justify-center gap-4'>
          {Techs.map((Techs,index) =>{
              return(
                  <motion.button className='rounded-[50px] font-bold  text-center py-[12px] pr-[20px] pl-[24px] border-slate-200 border-2 ' key={index}>{Techs}</motion.button>
              )
          })}
          </motion.div>
          <motion.div variants={item} className='border-b-[1px] border-fuchsia-900'></motion.div>
      </motion.div>
        )}
        </AnimatePresence>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nobis dicta sit maiores omnis pariatur numquam, quis dolorem quo quam veniam repudiandae! Explicabo, veniam nihil, illo ea dolore quidem corporis rerum laboriosam, distinctio voluptatum vitae. Dicta adipisci doloremque nisi debitis tenetur unde iste nesciunt, incidunt sapiente, nihil eum saepe autem!</div>
  </div>
  )
}

export default FilterPractice