"use client";
import { list } from "postcss";
import React from "react";

export const Filter = () => {
  const filter = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
  ];

  return (
    <div className="flex justify-between">
      <div className="flex w-[360px] h-[25px] justify-between">
        {filter.map((el, index) => (
          <ul>
            <li key={index} className="font-bold text-xs ">
              {el}
            </li>
          </ul>
        ))}
      </div>
      <div className="font-bold text-xs">View All</div>
    </div>
  );
};
