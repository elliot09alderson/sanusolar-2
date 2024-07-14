import React from "react";
import { BsDashLg } from "react-icons/bs";
import ServicesCard from "../component/ServicesCard";
import p1 from "/service/s1.jpg";
import p2 from "/service/s2.jpg";
import p3 from "/service/s3.jpg";
import p4 from "/service/s4.jpg";
import p5 from "/service/s5.jpg";
import p6 from "/service/s6.jpg";
import p7 from "/service/s7.jpg";

function Services() {
  return (
    <div className=" w-full h-full py-20 flex flex-col  px-[10px] lg:px-40 border-b border-slate-100 ">
      <div className="flex gap-2 ">
        <h1 className="text-lg tracking-[2px] font-medium uppercase">
          OUR Serivces
        </h1>
        <BsDashLg className="text-orange-500 size-8" />
      </div>
      <div className=" w-full h-full flex lg:flex-row flex-col items-center justify-between pb-10">
        <div className="flex flex-col justify-center">
          <h1 className="lg:w-[40vw] text-[40px] font-bold  leading-[8vh] text-slate-800">
            All Services are available with maintainance claims
          </h1>
        </div>

        <h1 className="text-slate-500 text-[17px] leading-8 ">
          It is a long established fact that a reader will be distracted by the
          It is a long established fact that a reader will be distracted by the
          It is a long established fact that a reader will be
        </h1>
      </div>

      <div className=" w-full flex flex-col  lg:flex-row flex-wrap  gap-12 h-full">
        {[
          {
            name: " Solar Panel",
            desc: "lorem3asdkaskdnkd asd asd asdmasdmasod ad asd sadamsd sd",
            img: p1,
          },
          {
            name: "Solar Battery Inverter ",
            desc: "lorem3asdkaskdnkd asd asd asdmasdmasod ad asd sadamsd sd",
            img: p2,
          },
          {
            name: "Earthing Kit",
            desc: "lorem3asdkaskdnkd asd asd asdmasdmasod ad asd sadamsd sd",
            img: p3,
          },
          {
            name: "Solar Module",
            desc: "lorem3asdkaskdnkd asd asd asdmasdmasod ad asd sadamsd sd",
            img: p4,
          },
          {
            name: "Dont know  ETXS",
            desc: "lorem3asdkaskdnkd asd asd asdmasdmasod ad asd sadamsd sd",
            img: p5,
          },
          {
            name: "Dont know  ETXS",
            desc: "lorem3asdkaskdnkd asd asd asdmasdmasod ad asd sadamsd sd",
            img: p6,
          },
          {
            name: "Dont know  ETXS",
            desc: "lorem3asdkaskdnkd asd asd asdmasdmasod ad asd sadamsd sd",
            img: p7,
          },
        ].map((item, idx) => (
          <ServicesCard
            name={item.name}
            img={item.img}
            desc={item.desc}
            key={idx + item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
