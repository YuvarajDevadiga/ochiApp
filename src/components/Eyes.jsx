import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener(
      "mousemove",
      (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;

        var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
        setRotate(angle - 180);
      },
      []
    );
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.7"
        className='relative w-full h-full  bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex relative items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full ">
            <div className="relative w-[9vw] h-[9vw] bg-zinc-800 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  "
              >
                <div className="w-[1.5vw] h-[1.5vw] bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="flex relative items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full ">
            <div className="relative w-[9vw] h-[9vw] bg-zinc-800 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  "
              >
                <div className="w-[1.5vw] h-[1.5vw] bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
