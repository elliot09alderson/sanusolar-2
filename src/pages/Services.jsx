import React from 'react'
import { BsDashLg } from "react-icons/bs";
import ServicesCard from '../component/ServicesCard';

function Services() {
  return (
    <div className=" w-full h-full py-20 flex flex-col  px-[10px] lg:px-40 border-b border-slate-100 ">
      <div className="flex gap-2 ">
        <h1 className="text-lg tracking-[2px] font-medium">OUR SERVICES</h1>
        <BsDashLg className="text-orange-500 size-8" />
      </div>
      <div className=" w-full h-full flex lg:flex-row flex-col items-center justify-between pb-10">
        <div className="flex flex-col justify-center">
          <h1 className="lg:w-[40vw] text-[40px] font-bold  text-slate-800">
            Constructing Excellence Delivering Results
          </h1> 
        </div>

        <h1 className="text-slate-500 text-[17px] leading-8 ">
          It is a long established fact that a reader will be distracted by the
          It is a long established fact that a reader will be distracted by the
          It is a long  established fact that a reader will be
        </h1>
      </div>

      <div className=' w-full flex flex-col lg:gap-0 gap-8 h-full'>

        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>

      </div>

    </div>
  );
}

export default Services
