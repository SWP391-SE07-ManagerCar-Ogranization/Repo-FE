import React from "react";

function item_footer({ label, p1, p2, p3 }) {
  return (
    <div className="flex flex-col ml-[180px] md:max-xl:ml-[20px] mobile:max-sm:ml-[83px]">
      <h2 className="text-2xl mb-10">{label}</h2>
      <p1 className="text-xl mb-3">{p1}</p1>
      <p1 className="text-xl mb-3">{p2}</p1>
      <p1 className="text-xl mb-3">{p3}</p1>
    </div>
  );
}

export default item_footer;
