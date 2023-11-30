import React from "react";
import { DiCssdeck } from "react-icons/di";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { isOpen } from "../utils/NavbarSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const checkNavbar = useSelector((state) => state.Navbar.value);

  const handleToggle = () => {
    dispatch(isOpen());
  };
  return (
    <>
      {/* for full screen menu */}
      <nav className="flex fixed z-[1000] top-0 justify-around bg-white  items-center w-full min-h-[8vh] text-black px-5 py-2 max-md:justify-between max-md:px-10 ">
        <div className="logo flex items-center">
          <DiCssdeck className="text-5xl font-bold" />
          <span className=" font-Poppins font-bold text-xl ">Portfolio</span>
        </div>
        <ul className="nav-links flex justify-around w-[25rem] font-semibold items-center font-Poppins max-md:hidden ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education ">Education</a>
          </li>
        </ul>
        <a href="https://github.com/AbhiChaturvedi2001" target="__blank">
          <button className="font-Poppins font-bold delay-150 duration-150 border-[#854ce6] border-2  text-[#854ce6] hover:bg-[#854ce6] transition-all cursor-pointer hover:text-white  px-4 py-2 rounded-full max-md:hidden">
            Github Profile
          </button>
        </a>
        <HiMiniBars3BottomRight
          onClick={handleToggle}
          className="text-3xl cursor-pointer hidden max-md:block font-bold font-Poppins"
        />
      </nav>

      {/* for mobile menu */}
      <div
        className={`hidden ${
          checkNavbar ? `max-md:block` : `max-md:hidden`
        } bg-bodyBgColor text-white py-5`}
      >
        <ul className="nav-links font-Poppins font-bold ml-[50px] pt-5 ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education ">Education</a>
          </li>
        </ul>
        <button
          onClick={handleToggle}
          className=" mt-5 ml-[40px] font-Poppins font-bold delay-150 duration-150 border-[#854ce6] border-2  text-[#854ce6] hover:bg-[#854ce6] transition-all cursor-pointer hover:text-white  px-4 py-2 rounded-full"
        >
          <a href="https://github.com/AbhiChaturvedi2001">Github Profile</a>
        </button>
      </div>
    </>
  );
};

export default Navbar;
