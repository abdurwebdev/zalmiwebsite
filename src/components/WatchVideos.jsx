import React from 'react'

const WatchVideos = () => {
  return (
    <section>
        <div className='flex h-screen flex-col xl:flex-row lg:flex-row xl:flex-nowrap sm:h-[120vh] md:h-[145vh] lg:h-[70vh] px-0 w-full '>
            <div className='px-2'>
                <h1 className='font-extrabold text-black text-9xl '>WATCH</h1>
                <h1 className='font-extrabold text-black text-9xl '>OUR</h1>
                <h1 className='font-extrabold text-black text-9xl '>VIDEOS</h1>
            </div>
            <div>
                <img className='w-full sm:w-[650px] sm:px-5 xl:w-[700px] md:w-[900px] lg:w-[800px] lg:h-[400px]  xl:h-[400px] object-cover h-full rounded-3xl' src="https://i.ytimg.com/vi/30H5nRlMh5E/maxresdefault.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default WatchVideos