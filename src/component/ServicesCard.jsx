import React from 'react'
import s1 from "/img-container/service-1.png"
import { FaPlus } from "react-icons/fa6";

function ServicesCard() {
  return (
    <div className="w-full h-full flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-20  justify-between border-y border-slate-100 py-3   ">
      <img src={s1} alt="" />

      <h1 className="text-nowrap font-bold text-3xl lg:text-2xl hover:text-orange-500 text-slate-700 ">
        Electrical Wiring
      </h1>

      <h1 className="text-slate-500 text-lg lg:text-[16px] leading-8">
        It is a long established fact that a reader will be distracted by the
      </h1>

      <div className="flex gap-3 w-60 text-slate-700  border-orange-500  border p-4 items-center rounded-lg">
        <button className="   font-bold uppercase">Read More</button>
        <FaPlus size={18} />
      </div>

    </div>
  );
}

export default ServicesCard
