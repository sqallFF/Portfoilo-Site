import React, { useState, useContext } from 'react'
import Pic1 from '../components/pexels-athena-2582937.jpg'
import Pic2 from '../components/pexels-harsch-shivam-2007647.jpg'
import Pic3 from '../components/pexels-thisisengineering-3861969.jpg'
import Pic4 from '../components/ezgif.com-gif-maker.webp'
import Filter from './Filter'
import { MyContext } from '../MyContext'
import { Link } from 'react-router-dom'
// const pics = [Pic4,Pic2,Pic3,Pic1,Pic2,Pic3,Pic2,Pic3,Pic1,Pic2];
// const Tech = ['React', 'Tailwind', "Javascirpt"]
// const Techs = ['React', 'Tailwind', "Javascirpt"]

function ProjectsPage() {
  const {pics, Tech, Techs, Imgs, ImgData} = useContext(MyContext);
  const [showStack, setShowStack] = useState(false);
  const Links = Imgs[0];
  console.log(ImgData)
  return (
    <div className=' bg-slate-900 text-slate-200'>
      <div className='border-b-[1px] border-slate-200'>
        <div className='px-8 pt-16'>
      <div className=''>
        <h1 className='text-5xl font-bold'>Projects</h1>
      </div>
      <div className='flex flex-col flex-1 justify-center items-start'>
    <div className='flex flex-1 justify-around items-center my-3 w-full '>
      {Tech.map((Tech) =>{
        return(
          <button className='rounded-[50px] font-bold px-6 text-center border-slate-200 border-2' key={Math.random()}>{Tech}</button>
        )
      })}
      </div>
      <div className='w-full'>
     <Filter Techs={Techs}/>
      </div>
    </div>
    </div>
    </div>
    <div className='h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 px-8 py-16'>
    {ImgData.map((Linked, index) => {
        return (
          <Link to={`/Projects/${Linked.id}`}>
        <div className='relative block overflow-hidden w-full h-[50vh] ' key={Math.random()}>
            <img src={Linked.media_details.sizes.full.source_url} key={Linked.id} alt='' className='object-cover absolute inset-0 w-full h-full'></img>
        </div>
        </Link>
        )}
    )}
    </div>
    </div>
  )
}

export default ProjectsPage