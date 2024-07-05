import React from 'react'
import c1 from '/img-container/testimonials1.jpg'

function ClientCard() {
  return (
    <div className="lg:w-[25vw] lg:[30vh] flex-col flex items-center gap-3  pt-20 relative">
      <div className="w-32 h-32 object-cover rounded-full absolute z-20  border-b-4 border-[#47af34] top-2">
        <img
          className=" rounded-full border-4 border-orange-500 p-2 "
          src={c1}
          alt=""
        />
      </div>
      {/* border-[#47af34] */}
      <div className="flex flex-col items-center justify-center border gap-3 pb-5 px-4 bg-whie  shadow-md pt-20">
        <em className="text-slate-500 px-3 text-lg text-center font-serif">
          The attention of a traveller, should be particularly turned to the
          various works of nature.
        </em>
        <h1 className="text-[#47af34] font-semibold ">Emily Richards - Copywriter</h1>

        <h1 className="text-2xl text-orange-500 gap-4">★★★★★</h1>
      </div>
    </div>
  );
}

export default ClientCard
