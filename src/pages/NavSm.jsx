import React from "react";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import logo from "/img-container/logo.svg";

function NavSm() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="w-full h-28 flex pl-10 bg-white lg:hidden drop-shadow-lg">
      <div className="flex justify-center gap-2 items-center ">
        <img
          className="w-16 h-16 p-2 rounded-full border-x-[5px] border-y-white border-y-4  border-[#47AF34] bg-orange-500"
          src={logo}
          alt=""
        />

        <div>
          <h1 className="font-bold tracking-tighter text-3xl font-sans text-zinc-700">
            Sanu Solar.
          </h1>
          <h1 className="text-[11px] text-zinc-400 font-medium">
            Center Of Free & Renewable Energy
          </h1>
        </div>
      </div>

      <div
        className={`${
          sidebar ? "w-[100vw]" : "w-0"
        } h-[100vh] bg-[#47af34] flex lg:hidden flex-col justify-center items-center duration-500 z-50  fixed top-0 right-0 text-zinc-100`}
      >
        <div
          onClick={() => {
            setSidebar((prev) => !prev);
          }}
          className="text-white bg-[#47af34] fixed top-6 right-10 w-10 lg:hidden h-10 border p-1 cursor-pointer hover:shadow-lg rounded-lg flex items-center justify-center"
        >
          <RiMenu3Line size={22} className="text-white " />
        </div>

        <div
          className={`${
            sidebar ? "flex" : "hidden"
          } flex lg:hidden parent items-center flex-col duration-400 justify-center gap-8`}
        >
          {["Home", "about", "contact us", "address", "services"].map(
            (item, idx) => (
              <h1 className="text-lg   capitalize cursor-pointer px-4 py-2 hover:tracking-widest hover:text-2xl hover:overline duration-500">
                {item}
              </h1>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default NavSm;
