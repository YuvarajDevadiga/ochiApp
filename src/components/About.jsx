import React from "react";
import { IoMdArrowUp } from "react-icons/io";
const About = () => {
  return (
    <div className="w-full p-20 font-['Neue_Montreal'] text-[#212121] bg-[#CDEA68] rounded-tr-2xl">
      <h1 className=" text-[4vw]  tracking-tight leading-[4.5vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] mt-20  flex gap-5 border-[#a1b562] ">
        <div className="w-1/2 ">
          <h1 className="text-[4.5vw] text-[#212121] ">Our approach:</h1>
          <button className="dot w-[13vw] flex items-center mt-5 justify-between  text-white uppercase py-4 px-6 bg-zinc-800 rounded-full">
            <h4> Read More</h4>
            <div className="w-2 h-2 dotball  bg-white rounded-full flex items-center justify-center">
              <span className="opacity-0 rotate-45 text-black  ">
                <IoMdArrowUp size={7} />
              </span>
            </div>
          </button>
        </div>
        <div className="w-1/2 h-[67vh] bg-red-500 mt-5 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
