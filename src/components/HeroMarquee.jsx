import React from "react";
import Marquee from "react-fast-marquee";
const HeroMarquee = () => {
  return (
    <section className="w-full h-44 bg-white flex items-center justify-center">
      <Marquee>
        <h1 className="font-bold text-9xl font-[Whyte] text-black">WE ARE CONTENT CREATORS</h1>
        <h1 className="font-bold text-9xl font-[Whyte] text-black">WE ARE CONTENT CREATORS</h1>
        <h1 className="font-bold text-9xl font-[Whyte] text-black">WE ARE CONTENT CREATORS</h1>
      </Marquee>
    </section>
  );
};

export default HeroMarquee;
