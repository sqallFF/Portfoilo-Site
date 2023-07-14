import React, {useContext, useEffect, useState} from 'react'
import Pic1 from '../components/pexels-athena-2582937.jpg'
import Pic2 from '../components/pexels-harsch-shivam-2007647.jpg'
import Pic3 from '../components/pexels-thisisengineering-3861969.jpg'
import Pic4 from '../components/ezgif.com-gif-maker.webp'
import { useParams } from 'react-router-dom'
import { MyContext } from '../MyContext'
import axios from 'axios'
function ProjectItemPage() {
    const {ImgData, imgLoaded, books} = useContext(MyContext);
    const params = useParams();
    const [result, setResult] = useState([]);
    const [project,setProject ] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [filtered, setFiltered] = useState(false);

    useEffect(() => {
        if(imgLoaded) {
    const result = books.filter(book => book.id === Number(params.id))
    setProject(result)
      axios.get(`/wp-json/wp/v2/media/${result[0].featured_media}`).then((res) => {
                const data = res.data
                console.log(data)
                setResult(data.media_details.sizes.full.source_url)
                  setFiltered( filtered => filtered = true)
            })
                }
    },[imgLoaded])

    useEffect(() => {
        console.log(project.length)
        if(filtered){
    setLoaded(loaded => loaded = true)
        }
    }, [filtered])
    if(loaded){
  return (
    <div className='w-full '>
        <div className='flex justify-between h-[100vh] px-28'>
            <div className='flex flex-col justify-center'>
                <button>Back</button>
            </div>
            <div className=' flex flex-col justify-center w-1/2 '>
                <h3 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-900'>{project[0].title.rendered}</h3>
                <h1 className='text-4xl'>Highly Skilled, Relationship Focused, Capital Advisory</h1>
            </div>
        </div>
        <div className='relative h-[110vh] w-full'>
            <img src={result} alt='' className='absolute object-cover inset-0 h-full w-full'/>
        </div>
        <div className='flex h-[100vh] px-28 justify-center items-center'>
            <div className='w-1/2'>
                <div className='mb-10 flex flex-col justify-around h-full'>
                    <h3 className='text-4xl mb-3'>OverView</h3>
                    <div className='flex rounded-full gap-6'>
                        <button className='rounded-full border-[1px] border-slate-400 px-5'>b1234</button>
                        <button className='rounded-full border-[1px] border-slate-400 px-5'>b12345</button>
                        <button className='rounded-full border-[1px] border-slate-400 px-5'>b12345</button>
                    </div>
                </div>
                <div className='text-2xl'>
                    <h4 className='font-bold'>Tech Stack</h4>
                    <h6>React</h6>
                    <h6>Tailwind</h6>
                    <h6>Javascript</h6>
                </div>
            </div>
            <div className='w-1/2'>
                <p className='text-2xl mb-3'>{project[0].content.rendered}</p>
                <button className='rounded-full border-[1px] border-slate-400 px-5'>Visit Site</button>
            </div>
        </div>
        <div className='px-28'>
            <div className='relative h-[100vh] w-full'>
                <img src={result}  alt="" className='absolute h-full w-full inset-0 object-cover' />
            </div>
        </div>
    </div>
    )
}
}

export default ProjectItemPage