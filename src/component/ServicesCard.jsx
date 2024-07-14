import React from "react";
import { FaPlus } from "react-icons/fa6";

function ServicesCard({ name, img, desc }) {
  return (
    <div className="w-full lg:w-96 h-full flex rounded-t-lg shadow-lg  flex-col lg:items-center gap-8   justify-between border-y border-slate-100   ">
      <img
        src={img}
        className=" lg:h-64 h-auto w-full object-contain lg:object-cover shadow-sm"
        alt=""
      />
      <div className="flex flex-col gap-4 py-8 items-center w-full px-4">
        <h1 className="text-nowrap font-bold text-3xl lg:text-2xl hover:text-orange-500 text-slate-700 ">
          {name}
        </h1>

        <h1 className="text-slate-500 text-lg lg:text-[16px] leading-8">
          {desc}
        </h1>

        <div className="flex gap-3 w-60 text-slate-700  border-orange-500  border p-4 items-center rounded-lg">
          <button className="   font-bold uppercase">Read More</button>
          <FaPlus size={18} />
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
