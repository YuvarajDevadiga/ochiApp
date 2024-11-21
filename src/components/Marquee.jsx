import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.3"
      className="w-full  py-[6vw]  bg-[#004D43] rounded-2xl"
    >
      <div className="text text-white border-t-[1px] border-b-[1px] border-zinc-300 flex  overflow-hidden whitespace-nowrap  ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-97%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[28vw] uppercase leading-none mt-4 -mb-[8vw] font-[marqueefont]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-97%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[28vw]  uppercase leading-none mt-4 -mb-[8vw] font-[marqueefont]"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
