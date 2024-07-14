import React from "react";
import homeBg from "/img-container/home-1.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrMailOption } from "react-icons/gr";
import { AiOutlineRightCircle } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
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
        className="relative h-[110vh] lg:h-screen w-full bg-cover bg-fixed bg-center "
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
                <h1>
                  <a href="tel:+91 6266346017">+91 6266 3460 17</a>
                </h1>
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
                <h1>Location:</h1>
                <h1>
                  <a href="https://www.google.com/maps/place/21%C2%B006'14.9%22N+81%C2%B019'22.7%22E/@21.1041302,81.3203932,17z/data=!3m1!4b1!4m4!3m3!8m2!3d21.1041302!4d81.3229681?entry=ttu">
                    Kokdi, Pauara Road, Durg CG
                  </a>
                </h1>
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
                <h1>Mail</h1>
                <h1>
                  {" "}
                  <a href="mailto:sanusolar01@gmail.com?subject=Subject&body=Hello%20there!">
                    sanusolar01@gmail.com
                  </a>
                </h1>
              </div>
            </div>
          </div>

          <div className="lg:mt-60  lg:mb-0 w-full flex  lg:flex-row flex-col-reverse justify-center  lg:items-start items-center lg:px-40 px-[20px] ">
            <div className="flex w-full flex-col  pb-8  lg:items-start items-center gap-8 lg:gap-10">
              <h1 className=" lg:text-5xl  text-3xl text-white font-bold lg:leading-[70px] leading-[50px] lg:text-left text-center ">
                We help in Financial Savings and Farm Protection
              </h1>

              <h1 className=" text-lg text-white lg:text-left text-center ">
                A Solar Panel And Renewable Energy Products Agency
              </h1>

              <div className="flex gap-3  bg-orange-500  text-white w-52 justify-center items-center py-3 rounded-full hover:border-2  hover:border-white text-xl ">
                <button className=" relative font-semibold cursor-pointer ">
                  {" "}
                  <a href="https://wa.me/6266346017?text=Hello%20there!">
                    Enquire Online
                  </a>
                </button>
                <FaWhatsapp size={30} />
              </div>
            </div>

            <div className="relative w-full flex lg:justify-end h-[44vh] lg:h-auto justify-center  pt-10 items-center  text-orange-500">
              <ImPower size={450} className="lg:p-0 pt-10 w-40 lg:w-auto" />

              <img
                className="absolute w-36 lg:w-80 right-20 lg:right-10 top-24 lg:top-3"
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
