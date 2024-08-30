"use client";
import React from "react";
import { TechnologyButton } from "./TechnologyButton";

export const Trending = () => {
  const trend = [
    {
      img: "trending-1.png",
      para: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      img: "/trending-2.png",
      para: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      img: "/bg-img2.png",
      para: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      img: "/trending-3.png",
      para: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="w-full h-[378px ">
      <h1 className="text-[#141624] font-bold text-2xl mb-[30px]">Trending</h1>
      <div className="flex gap-6">
        {trend.map(({ img, para }) => (
          <div className=" w-[289px] h-80 rounded-xl relative">
            <img
              className="object-cover w-full h-full absolute rounded-xl  "
              src={img}
              alt="zurag"
            />
            <div className="absolute z-50 w-[240px] h-[120px] flex flex-col bottom-7 left-[29px] gap-4">
              <TechnologyButton
                text={"Technology"}
                color={"bg-indigo-500"}
                textColor={"tetx-white"}
                size={"xs"}
              />
              <p className="text-lg font-semibold text-white">{para}</p>
            </div>
            <div className="absolute bg-black/40 w-full h-full rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};
