"use client";
import React from "react";

export const TechnologyButton = ({ text, color, textColor, size }) => {
  return (
    <div>
      <button
        className={`px-2.5 py-1 bg-${color} text-${size} text-${textColor} rounded-md font-medium  `}
      >
        {text}
      </button>
    </div>
  );
};
