"use client";
import React from "react";

export const TechnologyButton = ({ text, color, textColor, size }) => {
  return (
    <div>
      <button
        className={`px-2.5 py-1 ${color} text-${size} ${textColor} rounded-md font-medium`}
      >
        {text}
      </button>
    </div>
  );
};
