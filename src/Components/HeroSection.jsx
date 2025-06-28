import React from "react";
import frame from "../assets/frame.png";

function HeroSection() {
  return (
    <section className="container mx-auto grid md:grid-cols-2 items-center justify-center gap-8 px-4 py-12">
      <div className="flex flex-col justify-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#F5BF42]">
          Tasker
        </h1>
        <p className="md:text-lg text-gray-50 py-3 md:py-5 opacity-70">
          Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker —
          Your Personal Productivity Ally for Seamless Goal Achievement and
          Stress-Free Task Management.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="object-cover max-w-full h-auto" src={frame} alt="lws-frame" />
      </div>
    </section>
  );
}

export default HeroSection;
