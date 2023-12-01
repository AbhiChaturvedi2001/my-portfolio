import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SideBar = () => {
  return (
    <>
      <div className="fixed top-1/2  left-4">
        <a href="https://www.linkedin.com/in/abhishek1949/" target="__blank">
          <FaLinkedin className=" cursor-pointer text-3xl " />
        </a>
        <a href="https://twitter.com/home" target="__blank">
          <FaTwitter className=" cursor-pointer text-3xl mt-4 " />
        </a>
        <a href="">
          {" "}
          <FaInstagram className="cursor-pointer mt-4 text-3xl" />
        </a>
      </div>
    </>
  );
};

export default SideBar;
