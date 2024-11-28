import React from "react";

export const ContactButton = ({ title, desc }) => {
  return (
    <div className="w-full">
      <button className="border-[1px] border-[#E8E8EA] w-[294px] h-[133px] flex flex-col gap-[10px] rounded-md p-4">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="text-[#696A75] text-lg text-left">{desc}</p>
      </button>
    </div>
  );
};
