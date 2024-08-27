"use client";

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { TechnologyButton } from "./TechnologyButton";

const images = ["/bg-img.jpeg", "/bg-img2.png"];

export const Hero = () => {
  const [image, setImage] = useState(images[0]);

  const sliderHandler = () => {
    if (image === images[0]) {
      setImage(images[1]);
    } else {
      setImage(images[0]);
    }
  };

  return (
    <div className="flex flex-col gap-[11px]">
      <div className="w-full h-[600px] rounded-[10px] relative">
        <img
          className=" w-full h-[600px] rounded-[10px]"
          src={image}
          alt="bg-image"
        />
        <div className="w-[598px] h-[252px] px-10 py-10  bg-white rounded-xl absolute z-10 bottom-[13px] left-[11px]">
          <TechnologyButton />
          <h1 className="font-semibold text-4xl mt-4">
            Grid system for better Design User Interface
          </h1>
          <p className="text-gray-400 mt-6"> August 20, 2022</p>
        </div>
      </div>

      <div className="flex gap-[9px] left-0 justify-end">
        <button
          className="w-10 h-10 rounded-md border-gray-500 border-[1px]"
          onClick={sliderHandler}
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <button
          className="w-10 h-10 rounded-md border-gray-500 border-[1px]"
          onClick={sliderHandler}
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
