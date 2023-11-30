import React from "react";
import { skills } from "../data/constant";
import Card from "./Card";
const Skills = () => {
  return (
    <>
      <div id="skills" className="skills mt-5  w-full h-full py-5">
        <h1 className="text-center text-4xl text-black  font-bold">Skills</h1>
        <p className="text-center text-black max- font-Poppins mt-4 font-bold">
          Here are some of my skills on which I have been working on for the{" "}
          <br /> past 2 years.
        </p>
        <div className="flex flex-wrap justify-around gap-y-10 w-[80%] mx-auto mt-10 ">
          {skills.map((items) => {
            return <Card title={items.title} skill={items.skills} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
