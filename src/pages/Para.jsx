import React from "react";
import bgImg from "/img-container/bg-p.jpg";
import i8 from "/img-container/i8.png";
import { BsDashLg } from "react-icons/bs";

function Para() {
  return (
    <section
      className=" w-full h-[100vh]  bg-fixed bg-center bg-cover relative lg:h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full absolute inset-0 bg-black opacity-60"></div>

      <div className="w-full h-[90vh] absolute inset-0 flex  items-center justify-between py-20 flex-col">
        <div className="flex w-full  lg:px-40 px-[10px] justify-between items-center lg:flex-row flex-col">
          <div className="flex flex-col  gap-10 text-white">
            <div className="flex gap-2 ">
              <h1 className="text-lg tracking-[2px] font-medium">
                OUR SERVICES
              </h1>
              <BsDashLg className="text-orange-500 size-8" />
            </div>
            <div className=" w-full h-full flex gap-10  flex-col items-start pb-10">
              <h1 className="lg:w-[40vw] text-[40px] font-bold  text-white">
                Constructing Excellence Delivering Results
              </h1>

              <h1 className="text-white text-[17px] leading-8 ">
                It is a long established fact that a reader will be distracted
                by the It is a long established fact that a reader will be
                distracted by the It is a long established fact that a reader
                will be
              </h1>
            </div>
          </div>

          <div className="flex flex-col w-full h-full gap-8 lg:pr-0 pr-10">
            <div className="bg-gradient-to-l w-full flex from-[#47AF34] lg:p-6 p-4 gap-4  lg:gap-16">
              <div className=" flex lg:gap-10 lg:ml-24 ml-6  items-center ">
                <h1 className=" text-white text-4xl text-center font-mono">
                  1.
                </h1>

                <h1 className="font-semibold text-3xl text-nowrap text-white">
                  Field Visiting
                </h1>
              </div>
              <img
                className=" lg:w-28 lg:h-28  h-16 w-16 p-3 bg-slate-800 rounded-full shadow-lg "
                src={i8}
                alt=""
              />
            </div>

            <div className="bg-gradient-to-l w-full flex from-[#47AF34] lg:p-6 p-4 gap-4  lg:gap-16">
              <div className=" flex lg:gap-10 lg:ml-24 ml-6  items-center ">
                <h1 className=" text-white text-4xl text-center font-mono">
                  1.
                </h1>

                <h1 className="font-semibold text-3xl text-nowrap text-white">
                  Field Visiting
                </h1>
              </div>
              <img
                className=" lg:w-28 lg:h-28  h-16 w-16 p-3 bg-slate-800 rounded-full shadow-lg "
                src={i8}
                alt=""
              />
            </div>

            <div className="bg-gradient-to-l w-full flex from-[#47AF34] lg:p-6 p-4 gap-4  lg:gap-16">
              <div className=" flex lg:gap-10 lg:ml-24 ml-6  items-center ">
                <h1 className=" text-white text-4xl text-center font-mono">
                  1.
                </h1>

                <h1 className="font-semibold text-3xl text-nowrap text-white">
                  Field Visiting
                </h1>
              </div>
              <img
                className=" lg:w-28 lg:h-28  h-16 w-16 p-3 bg-slate-800 rounded-full shadow-lg "
                src={i8}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Para;
