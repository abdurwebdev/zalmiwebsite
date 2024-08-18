import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
  useEffect(() => {
    gsap.to("#pinItem #imagesContainer",{
      transform:"translateX(-100%)",
      scrollTrigger:{
        trigger:"#pinItem",
        scroller:"body",
        start:"top 0%",
        scrub:2,
        pin:true
      }
    })
  
    return () => {
      
    }
  }, [])
  

  return (
    <section id='pinItem' className='w-full h-[60vh] items-center justify-center  overflow-hidden'>
      <div
        id='imagesContainer'
        className='flex space-x-5 w-[calc(500px*14)]'>
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/NQ722ZeUR8I/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/qtX_sJN2-ow/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/_a2NwL1PqPk/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/YEeYXIayV0g/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/fa1e3WZ_HHk/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/11pbUgZ_pBc/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/DUzi7uJpHGI/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/NQ722ZeUR8I/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/qtX_sJN2-ow/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/_a2NwL1PqPk/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/YEeYXIayV0g/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/fa1e3WZ_HHk/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/11pbUgZ_pBc/maxresdefault.jpg" alt="" />
        <img className='object-cover rounded-3xl w-[500px] h-[300px]' src="https://i.ytimg.com/vi/DUzi7uJpHGI/maxresdefault.jpg" alt="" />
      </div>
    </section>
  );
}

export default Videos;
