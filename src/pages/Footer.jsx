import React from "react";
import footerBg from "/img-container/solar-1.jpg";
import logo from "/img-container/logo.svg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div
      className="relative h-[100vh]  lg:h-[60vh] w-full bg-cover bg-fied bg-center "
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="absolute inset-0  lg:gap-0  bg-[#100725]  bg-opacity-90 flex flex-col items-center justify-center lg:px-40 px-[20px]  ">
        <div className="flex items-start  bg-re-600/50  lg:gap-0 gap-20 lg:flex-row flex-col py-10 lg:py-20 justify-between w-full ">
          <div className="text-white flex flex-col gap-6 lg:gap-8">
            <h1 className="text-2xl font-bold ">Quick Contact</h1>
            <h1 className="text-lg font-medium ">
              2072 New Town, Xblock Street WA 98370 United State
            </h1>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-white">
                <FiPhone
                  size={40}
                  className="bg-orange-500 p-3  rounded-full"
                />
                <h1 className=" text-lg">(+91 6266346017)</h1>
              </div>
              <div className="flex gap-3 text-white">
                <MdOutlineMailOutline
                  size={40}
                  className="bg-orange-500 p-3  rounded-full"
                />
                <h1 className="text-lg">sanusolar@gmail.com</h1>
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col gap-6 lg:gap-8">
            <h1 className="text-2xl font-bold text-nowrap">Useful Services</h1>

            <div className="flex gap-10">
              <div className=" flex flex-col text-white gap-2">
                <h1 className="text-nowrap hover:text-orange-500 text-[17px] duration-500 ">
                  Solar Fencing
                </h1>
                <h1 className="text-nowrap hover:text-orange-500 text-[17px] duration-500 ">
                  Water Gyser
                </h1>
                <h1 className="text-nowrap hover:text-orange-500 text-[17px] duration-500 ">
                  Home Light
                </h1>
                <h1 className="text-nowrap hover:text-orange-500 text-[17px] duration-500 ">
                  Street Light
                </h1>
              </div>

              <div className=" flex flex-col text-white gap-2">
                <h1 className="text-nowrap hover:text-orange-500 text-[17px] duration-500 ">
                  On Grid Power Plant
                </h1>
                <h1 className="text-nowrap hover:text-orange-500 text-[17px] duration-500 ">
                  Off Grid Power Plant
                </h1>
                <h1 className="text-nowrap hover:text-orange-500 text-[17px] duration-500 ">
                  Light Trap
                </h1>
                <h1 className="text-nowrap hover:text-orange-500 text-[17px] duration-500 ">
                  Solar Fan
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between  lg:mb-8  gap-10 lg:gap-48">
          <div className="flex gap-4  ">
            <img
              className="w-16 h-16 p-2 rounded-full border-x-[5px] border-y-white border-y-4  border-[#47AF34] bg-orange-500"
              src={logo}
              alt=""
            />

            <div>
              <h1 className="font-bold tracking-tighter text-3xl text-nowrap font-sans text-white">
                Sanu Solar.
              </h1>
              <h1 className="text-[12px] text-zinc-400 text-nowrap font-medium">
                Center Of Free & Renewable Energy
              </h1>
            </div>
          </div>

          <h1 className=" text-white text-lg lg:text-end ">
            Ut tellus dolor, dapibus eget, elementum vel, ifend cursus eleifend,
            elit. Aenea ifendn auctor wisi Aliquam er at volutpat. Duis ac
            tuifendrpis
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
