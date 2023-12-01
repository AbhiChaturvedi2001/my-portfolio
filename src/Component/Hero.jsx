import React from "react";
import { Bio } from "../data/constant";
import Typewriter from "typewriter-effect";
import SideBar from "./SideBar";
const Hero = () => {
  return (
    <>
      <SideBar />
      <div
        id="about"
        className="text-black h-[70vh] mt-[80px] w-[80%] mx-auto flex justify-center items-center"
      >
        <div className="left font-Poppins max-md:text-center w-full">
          <h1 className="text-4xl font-Poppins font-bold">Hi, I am</h1>
          <h1 className="font-bold text-4xl mt-4">{Bio.name}</h1>
          <h1 className="flex items-center font-bold text-3xl mt-4 ">
            I am
            <span className="ml-2 text-[#854ce6] text-center text-4xl font-bold font-Poppins">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div className="w-[80%] mx-sm:mx-auto">
            <p className="text-[5px] mt-4">{Bio.description}</p>
          </div>
          <a href="./abhi(1).pdf" download>
            <button className="resumebtn mt-4 border px-5 w-[15rem] py-3 font-bold font-Poppins">
              Get RESUME
            </button>
          </a>
        </div>
        <img
          className="w-[400px] max-md:hidden"
          src="https://media4.giphy.com/media/uB86ZyWQsnFSGYe2sA/giphy.gif?cid=ecf05e47e7xi4k37njkz04if67uy112fwqn77gtmsbecbve0&ep=v1_gifs_related&rid=giphy.gif&ct=g"
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
