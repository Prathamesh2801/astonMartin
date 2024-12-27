import React from "react";
import BackVid from "../assets/VB.mp4";
export default function Hero() {
  return (
    <>
      <div className="hero min-h-[100vh]">
        <video className="absolute top-0 left-0 -z-10 object-cover h-screen w-screen" autoPlay muted loop>
          <source src={BackVid}></source>
        </video>
        <div className="hero-overlay top-0 absolute bg-opacity-25"></div>
        <div className="hero-content   justify-self-start self-end mb-28 text-neutral-content mx-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl md:text-5xl font-bold">Vantage, Vantage GT3 and AMR24</h1>
          
            <button className="btn  text-white  bg-transparent mx-5 hover:bg-white hover:text-black  ">Explore</button>
            <button className="btn  text-white  bg-transparent mx-5 hover:bg-white hover:text-black  ">Configure</button>
          </div>
        </div>
      </div>
    </>
  );
}
