import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div data-scroll data-scroll-speed="-.8" className="w-full h-screen  pt-1">
      <div className="textstructure mt-44 px-20 ">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-5 w-[8vw] h-[5.7vw] rounded bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] relative -top-[0.8vw]"
                  ></motion.div>
                )}
                <h1
                  className="pt-[2vw] -mb-[1vw] text-[9vw] uppercase  leading-[6vw] font-bold
              font-[founders]"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-16 flex justify-between items-center py-5 px-20 ">
        {["For public and private companies", "From th first pitch to IPO"].map(
          (item, index) => {
            return (
              <p className=" text-md font-normal tracking-tight leading-none">
                {item}
              </p>
            );
          }
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-normal text-md  uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
