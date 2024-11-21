import { motion } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const [isHover, setHover] = useState(false);
  const [isHover2, setHover2] = useState(false);

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-16">
        <h1 className="text-6xl font-['Neue_Montreal'] tracking-tight ">
          Featured Projects
        </h1>
      </div>
      <div className="px-16">
        <div className="cards w-full flex gap-10  mt-16 ">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="cardcontainer relative rounded-xl w-1/2 h-[35vw]  "
          >
            <h1 className="absolute overflow-hidden flex text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 left-full text-8xl leading-none tracking-tighter z-[9]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHover ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  rounded-xl w-full h-full  overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
            className="cardcontainer relative rounded-xl w-1/2 h-[35vw]  "
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 right-full text-8xl leading-none tracking-tighter z-[9]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHover2 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
