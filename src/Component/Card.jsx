import React from "react";

const Card = ({ title, skill }) => {
  return (
    <>
      <div className="w-[32rem] max-sm:w-full min-h-[40vh] h-auto border cursor-pointer transition-all duration-100 delay-100   shadow-lg shadow-cyan-500/50 border-[#854ce6] rounded-md px-2 py-3 ">
        <h1 className="text-center font-Poppins text-4xl font-bold text-[#b1b2b3] my-3">
          {title}
        </h1>
        <div className="flex justify-center flex-wrap items-center  ">
          {skill.map((items) => {
            return (
              <>
                <div className="flex items-center border border-[#b1b2b3] rounded-lg px-4 py-2 mt-3 ml-2">
                  <img className="w-[20px]" src={items.image} alt="" />
                  <h1 className="ml-1 text-[#b1b2b3] font-Poppins font-semibold">
                    {items.name}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
