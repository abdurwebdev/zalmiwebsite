import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
const Navbar = () => {
  const menuOpenRef = useRef();
  const menuCloseRef = useRef();
  const closeMenuRef = useRef();
  useEffect(() => {
    const handleMenuOpen = () =>{
      gsap.to(menuCloseRef.current,{
        transform:"translateX(0%)",
        ease:"power3.out",
        duration:1
      })
      
    }
    const handleMenuClose = () =>{
      gsap.to(menuCloseRef.current,{
        transform:"translateX(-100%)",
        duration:1
      })
    }
  const menuOpen=menuOpenRef.current;
  const menuClose=closeMenuRef.current;
  menuOpen.addEventListener("click",handleMenuOpen);
  menuClose.addEventListener("click",handleMenuClose);
  return () => {
      menuOpen.removeEventListener("click",handleMenuOpen);
      menuClose.removeEventListener("click",handleMenuClose);
    }
  }, [])
  
  return (
    <>
      <nav className="px-10 flex items-center w-full h-10 justify-between py-12">
        <img
          className="w-16 h-16 rounded-full"
          src="https://yt3.googleusercontent.com/66iR8FGBUmj8FnhPwYOVO6wTig3n6cjgmo3312mEL8qVP8RLnQGAF6kuzBpeCBVN8Zkqj2vCkQ=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <button ref={menuOpenRef} className="px-8 pointer-events-auto relative overflow-hidden nav-button py-3 border border-black rounded-full">
          Menu
        </button>
      </nav>
      <section ref={menuCloseRef} id="menuClose" className="w-full h-screen absolute top-0 left-0 flex-col bg-[#111] flex items-start justify-start">
        <div>
          <button ref={closeMenuRef} className="px-10 overflow-hidden pointer-events-auto py-3 right-4 nav-close-menu  absolute top-5  bg-white rounded-full">
            CLOSE
          </button>
        </div>
        <div className="flex  items-start mt-24 gap-y-5 flex-col w-full justify-center">
          <h1 className=" hone overflow-hidden pointer-events-auto text-white navbar-menu px-10 py-5 border-t border-b w-full font-extrabold text-6xl">
            HOME
          </h1>

          <h1 className="hTwo relative overflow-hidden pointer-events-auto text-white px-10 py-5  navbar-menu border-t border-b w-full font-extrabold text-6xl">
            ABOUT
          </h1>
          <h1 className="hThree relative overflow-hidden pointer-events-auto text-white px-10 py-5 border-t  navbar-menu border-b w-full font-extrabold text-6xl">
            SERVICES
          </h1>
          <h1 className="hFour relative overflow-hidden pointer-events-auto text-white px-10 py-5 border-t border-b  navbar-menu w-full font-extrabold text-6xl">
            PRODUCTS
          </h1>
        </div>
      </section>
    </>
  );
};

export default Navbar;
