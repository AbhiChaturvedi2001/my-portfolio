import React from "react";

const Contact = () => {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-center font-Poppins font-bold text-5xl">
          Contact{" "}
        </h1>
        <p className="text-center font-Poppins font-semibold">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="flex justify-center w-[70%] max-md:w-full mx-auto mt-5 ">
          <form
            action=""
            className="border shadow-lg shadow-cyan-500/50 border-[#854ce6] py-5 rounded-lg px-4 w-[80%] "
          >
            <h1 className="my-2 font-Poppins font-bold text-3xl ">
              Email Me 🚀
            </h1>
            <div>
              <input
                className="block border w-[100%] rounded-md pl-3 py-2"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="block border w-[100%] rounded-md pl-3 py-2 mt-2"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="block border w-[100%] rounded md pl-3 py-2 mt-2"
                type="text"
                placeholder="Your Subject"
              />
              <textarea
                className="block border w-[100%] rounded-md pl-3 mt-2"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn font-bold font-Poppins border w-full mt-2 py-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
