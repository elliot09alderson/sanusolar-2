

import React from "react";
import tm1 from "/img-container/employes-2.png";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";

function TeamCard() {
  return (
    <div className=" w-[90vw] lg:w-full lg:px-40 px-[20px] h-[60vh] relative ">
      <img
        className="px-3 w-full lg:w-80 absolute top-2 lg:top-0 left-0 z-20"
        src={tm1}
        alt=""
      />

      <div className="bg-white shadow-xl w-full h-[40vh] flex flex-col gap-3 justify-center items-center pt-20 bottom-0 absolute left-0">

        <div className="flex  justify-center gap-5 text-slate-800 pt-10 ">
          <RiFacebookFill className="bg-zinc-200 p-1 rounded-md " size={28} />
          <FaInstagram className="bg-zinc-200 p-1 rounded-md" size={28} />
          <FaPinterestP className="bg-zinc-200 p-1 rounded-md" size={28} />
          <RiLinkedinFill className="bg-zinc-200 p-1 rounded-md" size={28} />
        </div>

        <h1 className="font-semibold text-zinc-800 text-xl">Courtoney Henry</h1>

        <h1 className="font-medium text-zinc-400">Solar Expert</h1>

      </div>
    </div>
  );
}

export default TeamCard;
