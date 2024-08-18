import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef } from 'react'
import Box from '../public/Box'
import { Environment, OrbitControls } from '@react-three/drei'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroMarquee from './components/HeroMarquee'
import WatchVideos from './components/WatchVideos'
import gsap from 'gsap';
import Videos from './components/Videos'
import Footer from './components/Footer'
import VideosTwo from './components/VideosTwo'
const App = () => {
  const cursorRef = useRef();
  useEffect(() => {
    const handleMoveCursor = (events) =>{
      gsap.to(cursorRef.current,{
        x:events.clientX,
        y:events.clientY
      })
    }
  
  window.addEventListener("mousemove",handleMoveCursor);
    return () => {
      window.removeEventListener("mousemove",handleMoveCursor);
    }
  }, [])
  
  return (
    <>
    <div className='w-full h-full relative'>
      <div id="cursor" ref={cursorRef} className='fixed z-[9999] w-10 h-10 bg-black top-0 left-0 rounded-full'></div>
    <Canvas>
      <ambientLight intensity={3}/>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5}/>
      <Suspense fallback={null}>
        <Box/>
      </Suspense>
      <Environment preset='sunset'/>
    </Canvas>
    <div id="pageOne" className='w-full absolute top-0 left-0 h-screen pointer-events-none'>
      <div>
        <Navbar/>
        <Hero/>
        <HeroMarquee/>
        <WatchVideos/>
        <Videos/>
        <Footer/>
      </div>
    </div>
    </div>
    </>
  )
}

export default App