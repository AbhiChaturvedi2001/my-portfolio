import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-center my-[100px] px-5">
        <h1 className="font-Poppins font-bold">Abhishek Chaturvedi</h1>
        <ul className="nav-links flex justify-around w-[45%] max-md:w-[70%] max-sm:w-full text-xl max-md:text-md mt-5 mx-auto font-Poppins font-bold  ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education ">Education</a>
          </li>
        </ul>
        <p className="mt-4 font-Poppins font-semibold">
          © 2023 Abhishek Chaturvedi. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
