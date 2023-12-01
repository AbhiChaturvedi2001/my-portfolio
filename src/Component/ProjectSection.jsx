import React, { useState } from "react";
import { buttonsData, projects } from "../data/constant";
import ProjectCard from "./ProjectCard";
const ProjectSection = () => {
  const [FilteredData, setFilteredData] = useState(projects);
  const [mainData, setmainData] = useState(projects);

  const handleFiltering = (category) => {
    const filtering = mainData.filter((items) => {
      if (items.category === category) {
        return items;
      } else if (category === "all") {
        return items;
      }
    });
    setFilteredData(filtering);
  };
  return (
    <>
      <div className="min-h-[100vh] h-auto my-10">
        <h1 className="font-Poppins text-5xl font-bold text-center">
          Projects
        </h1>
        <p className="font-Poppins text-center mt-3">
          I have worked on a wide range of projects. From web apps <br /> to
          android apps. Here are some of my projects
        </p>
        <div className="flex justify-center my-10 px-5">
          {buttonsData.map((btn) => {
            return (
              <>
                <button
                  onClick={() => handleFiltering(btn.id)}
                  className="px-3 py-2 w-[10%] max-md:w-[20%] max-sm:w-full font-Poppins font-bold cursor-pointer border"
                  id={btn.id}
                >
                  {btn.buttonName}
                </button>
              </>
            );
          })}
        </div>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-5">
          {FilteredData.map((items) => {
            return (
              <ProjectCard key={items.id} items={items} tags={items.tags} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
