import React from "react";

const Hero = () => {
  return (
    <>
      <section className="px-12 mt-16 flex-col sm:flex sm:flex-row md:gap-x-24 sm:gap-x-16 lg:gap-x-64 xl:gap-x-[450px]  flex items-center justify-start">
        <div id="heroHeading" >
          <h1 className="text-[90px] leading-[70px] font-extrabold text-[Whyte]">
            WE
          </h1>
          <h1 className="text-[90px] leading-[70px] font-extrabold text-[Whyte]">
            CREATE
          </h1>
          <h1 className="text-[90px] leading-[70px] font-extrabold text-[Whyte]">
            CONTENT
          </h1>
        </div>
        <div className="w-full h-full mt-10  flex flex-col gap-y-5 ">
            <div id="circularCards" className="flex  pointer-events-auto hover:bg-blue-500 items-center px-5 py-2 w-96 sm:w-48 md:w-72 rounded-full border border-black justify-around">
                <img className="w-16 h-16 rotate-picture object-cover rounded-full" src="https://yt3.googleusercontent.com/66iR8FGBUmj8FnhPwYOVO6wTig3n6cjgmo3312mEL8qVP8RLnQGAF6kuzBpeCBVN8Zkqj2vCkQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
                <h1 className="font-[gilroy]">Zalmi Plays</h1>
            </div>
            <div id="circularCards" className="flex pointer-events-auto hover:bg-blue-500 items-center px-5 py-2 w-96 sm:w-48 md:w-72 rounded-full border border-black justify-around">
                <img className="w-16 h-16 rotate-picture object-cover rounded-full" src="https://yt3.ggpht.com/ytc/AMLnZu-pjpSVg8UhWHifJPLWQD-4eaEaJliNPT9gIwyeDQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
                <h1 className="font-[gilroy]">Zalmi Gaming</h1>
            </div>
            <div id="circularCards" className="flex mb-5 pointer-events-auto hover:bg-blue-500 items-center px-5 py-2 w-96 sm:w-48 md:w-72 rounded-full border border-black justify-around">
                <img className="w-16 h-16 rotate-picture object-cover rounded-full" src="https://yt3.googleusercontent.com/znN5gvcrqqnVSvZ2hnAEjGPZ_V1xrxCmsnR9rwGbMaDR6lG2aE3ZuK3B0y6a4GPHmVa9DE9vig=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="" />
                <h1 className="font-[gilroy]">Little Zalmi</h1>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
