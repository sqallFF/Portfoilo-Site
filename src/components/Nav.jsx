import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {GiHamburgerMenu} from "react-icons/gi"
import Menu from './Menu';
import { useContext } from 'react'
import { MyContext } from '../MyContext'

function Nav() {
  const {isOpen, setIsOpen} = useContext(MyContext)
  return (
    <>
    <div className='mix-blend-difference fixed z-50'>
  <div className='w-full flex justify-end invert fixed z-50 '>
    <GiHamburgerMenu className=" mr-5 mt-4" size={60} onClick={() =>{setIsOpen(!isOpen)}}/>
  </div>
  </div>
  <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Nav