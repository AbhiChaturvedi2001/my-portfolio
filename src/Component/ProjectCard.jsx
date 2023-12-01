import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ items, tags }) => {
  const { title, image, description } = items;
  const [showmodal, setshowmodal] = useState(false);
  return (
    <>
      <div
        id="projects"
        className="projectCard w-[22rem] rounded-lg min-h-[30vh] cursor-pointer h-auto shadow-lg shadow-cyan-500/50 border-[#854ce6] border px-5 py-5"
      >
        <img className="w-[100%] rounded-lg h-[25vh]" src={image} alt="" />
        <div>
          <div className="flex flex-wrap">
            {tags.map((tg) => {
              return (
                <>
                  <p className="tags px-3 font-Poppins font-semibold mt-3 ml-2 ">
                    {tg}
                  </p>
                </>
              );
            })}
          </div>
          <h1 className="font-Poppins text-2xl font-bold ml-2 mt-3">{title}</h1>
          <p className="ml-2 mt-3 font-Poppins">
            {description.substr(0, 60)}.....
          </p>
          <button
            onClick={() => setshowmodal(true)}
            className="ml-2 px-2 border py-1 cursor-pointer mt-4"
          >
            check out{" "}
          </button>
        </div>
      </div>
      {showmodal && <ProjectModal />}
    </>
  );
};

export default ProjectCard;
