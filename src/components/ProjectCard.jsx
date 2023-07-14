import React, { useEffect, useContext, useState } from 'react'
import {IoLogoJavascript} from "react-icons/io";
import {FaReact, FaWordpressSimple} from "react-icons/fa";
import {cubicBezier, motion} from 'framer-motion';
import {Link} from 'react-router-dom'
import { MyContext } from '../MyContext'
import axios from 'axios'


function ProjectCard({pic, title, bookId , media}) {
  const {pics, Tech, Techs, ImgData, isLoaded, imgLoaded} = useContext(MyContext);
if (imgLoaded){
  console.log(media.images)
}
  return (
    <>
      <Link to={`/Projects/${bookId}`}>
  <div className="item border-r-[1px] border-slate-300">
    <div className="items-wrapper">
      {}
      {/* <img src={media.large.source_url} alt="" className=''/> */}
      <div className="img-overlay"></div>
      <div className="item-copy text-4xl">
        <div className="item-name">
          {title}
        </div>
      </div>
    </div>
  </div>
  </Link>
    </>
  )
}

export default ProjectCard