import React from "react";
import homeBg from "/img-container/home-1.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrMailOption } from "react-icons/gr";
import { AiOutlineRightCircle } from "react-icons/ai";
import { ImPower } from "react-icons/im";
import panel from "/img-container/3-panels.png";
import Nav from "./Nav";
import NavSm from "./NavSm";

function Home() {
  return (
    <div className=" w-full h-full flex-col bg-black  ">

      <div className="w-full h-20 z-30 fixed top-0 ">
        <NavSm />
      </div>

      <div
        className="relative h-[100vh] lg:h-screen w-full bg-cover bg-fixed bg-center "
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="absolute inset-0   bg-[#190b2f]  bg-opacity-80 flex items-center justify-center">
          <div className=" w-full h-full absolute top-0 left-0 lg:flex hidden">
            <Nav />
          </div>

          <div className="absolute top-32 left-[8vw] lg:flex hidden justify-center">
            <div className="bg-[#47af34] h-34 w-[28vw] flex justify-center items-center p-6 gap-3">
              <div className="bg-white text-[#47af34] h-12  w-12 rounded-full p-2 flex  items-center justify-center ">
                <LuPhoneCall
                  style={{ strokeWidth: "2px", fill: "white" }}
                  className="text-2xl"
                />
              </div>
              <div className="flex flex-col justify-center text-white text-lg font-bold ">
                <h1>Phone No:</h1>
                <h1>+91 6266 3460 17</h1>
              </div>
            </div>

            <div className="bg-[#348f24] h-34 w-[28vw] flex justify-center items-center p-6 gap-3">
              <div className="bg-white text-[#47af34] h-12  w-12 rounded-full p-2 flex  items-center justify-center ">
                <HiOutlineLocationMarker
                  style={{ strokeWidth: "2px", fill: "white" }}
                  className="text-2xl"
                />
              </div>
              <div className="flex flex-col justify-center text-white text-lg font-bold ">
                <h1>Phone No:</h1>
                <h1>+91 6266 3460 17</h1>
              </div>
            </div>

            <div className="bg-[#47af34] h-34 w-[28vw] flex justify-center items-center p-6 gap-3">
              <div className="bg-white text-[#47af34] h-12  w-12 rounded-full p-2 flex  items-center justify-center ">
                <GrMailOption
                  style={{ strokeWidth: "2px", fill: "white" }}
                  className="text-2xl"
                />
              </div>
              <div className="flex flex-col justify-center text-white text-lg font-bold ">
                <h1>Phone No:</h1>
                <h1>+91 6266 3460 17</h1>
              </div>
            </div>
          </div>

          <div className="lg:mt-60 mb-18 lg:mb-0 w-full flex bg-pik-600 lg:flex-row flex-col-reverse  lg:items-start items-center lg:px-40 px-[20px] ">
            <div className="flex w-full flex-col lg:items-start items-center gap-8 bg-gree-700 lg:gap-10">
              <h1 className=" lg:text-5xl  text-4xl text-white font-bold lg:leading-[70px] leading-[50px] lg:text-left text-center ">
                Renewable Energy Solutions that Deliver Financial Savings
              </h1>

              <h1 className=" text-lg text-white lg:text-left text-center ">
                Provide Solar Panels And Renewable Energy Products
              </h1>

              <div className="flex gap-3  bg-orange-500  text-white w-52 justify-center items-center py-3 rounded-full hover:border-2  hover:border-white text-xl ">
                <button className=" font-semibold ">Enquire Online </button>
                <AiOutlineRightCircle size={30} />
              </div>
            </div>

            <div className="relative w-full flex justify-end  text-orange-500">
              <ImPower size={450} className="lg:p-0 p-10" />

              <img
                className="absolute w-52 lg:w-80 right-20 lg:right-10 top-16 lg:top-3"
                src={panel}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
