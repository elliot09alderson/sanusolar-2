import React from 'react'
import ClientCard from '../component/ClientCard';


function Clients() {
  return (
    <div className="bg-slate-100 w-full h-full lg:px-40 px-[20px] flex flex-col justify-center items-center py-20">
      <div className="flex justify-center items-center  text-orange-500 gap-2">
        <h1 className=" font-medium uppercase tracking-widest ">Our Team</h1>
      </div>

      <div className="flex flex-col justify-center pt-8 items-center gap-8">
        <h1 className="text-5xl text-center font-bold text-slate-700 capitalize">
          Meet Our Expert Team Members
        </h1>
        <h1 className="text-slate-500 text-xl text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          labore.
        </h1>
      </div>

      <div className="w-full h-full flex lg:flex-row flex-col bg-yllow-500 justify-between pt-20 lg:gap-16  gap-3  ">

        <ClientCard/>
        <ClientCard/>
        <ClientCard/>
      </div>
    </div>
  );
}

export default Clients
