import React from 'react'
import bulb from '/img-container/bulb-solar.png'
import { AiOutlineRightCircle } from "react-icons/ai";


function GreenCard() {
  return (
    <div className=" w-full lg:px-40 px-[10px] py-20">
      <div className="bg-[#47AF34] lg:h-[50vh] w-full px-4 relative py-14 lg:pb-0 pb-40">
        <div className="lg:w-[50vw] flex flex-col gap-3 text-white lg:items-start lg:pl-14 items-center ">
          <h1 className="font-semibold text-lg lg:text-left text-center">
            ARE YOU LOOKING FOR AN INSTALLER
          </h1>
          <h1 className=" font-semibold  text-3xl lg:text-[42px] lg:text-left text-center lg:leading-[55px]  leading-[45px]  ">
            We are a Global Solar Panel Pump and Street light installer
          </h1>

          <dir className="flex items-center gap-2 text font-bold py-4 px-10 bg-orange-500 rounded-full">
            <button>Contact Us</button>
            <AiOutlineRightCircle size={30} />
          </dir>
        </div>

        <div className=" absolute lg:top-16 right-3 lg:w-[40vw]">
          <img src={bulb} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GreenCard
