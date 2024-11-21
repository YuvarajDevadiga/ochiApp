import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-16 gap-5 ">
      <div className="cardcontainer h-[25vw] w-1/2">
        <div className="relative card rounded-xl w-full h-full flex items-center justify-center  bg-[#004D43] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute text-[#B6D864] border-[#B6D864] px-4 py-1 rounded-full border-2 left-8 bottom-8">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[25vw] ">
        <div className="relative flex items-center justify-center card w-1/2 rounded-xl bg-[#212121] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute leading-none tracking-tighter text-[#F1F1F1] border-[#F1F1F1] px-4 py-1 rounded-full border-2 left-8 bottom-8">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="relative flex items-center justify-center card w-1/2 rounded-xl bg-[#212121] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute leading-none tracking-tighter text-[#F1F1F1] border-[#F1F1F1] px-4 py-1 rounded-full border-2 left-8 bottom-8">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
