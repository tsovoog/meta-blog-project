"use client";
import React from "react";
import { Filter } from "./Filter";
import { LoadMoreButton } from "./LoadMoreButton";

export const AllPost = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-2xl">All Blog Post</h1>
        <Filter />
      </div>
      <div></div>
      <LoadMoreButton />
    </div>
  );
};
