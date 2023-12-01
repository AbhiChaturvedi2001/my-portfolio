import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";

const ProjectModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div className="fixed z-1000 w-full h-full top-0 left-0 bottom-0 right-0 overflow-y-hidden  bg-transparentColor  ">
      <div className="modal-container bg-[#171721] h-[80vh] py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[50%]">
        <ImCross
          onClick={closeModal}
          className="text-white cursor-pointer absolute right-0 "
        />
        <h1 className="text-center text-white">
          Project Details Coming Sooon......{" "}
        </h1>
      </div>
    </div>
  );
};

export default ProjectModal;
