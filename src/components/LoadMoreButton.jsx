"use client";
import React from "react";

export const LoadMoreButton = ({ countHandler }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={countHandler}
        className="px-5 py-3 border-[1px] border-gray-500 rounded-xl text-gray-500 "
      >
        Load more
      </button>
    </div>
  );
};
