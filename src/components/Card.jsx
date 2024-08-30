import React from "react";
import { TechnologyButton } from "./TechnologyButton";

export const Card = ({ cover, tag, published_at, title, userPro = "" }) => {
  const colors = ["indigo-50"];
  return (
    <div className="w-[392px] h-[488px] p-4 rounded-xl border-[1px] border-[#E8E8EA]">
      <div className="w-full h-60 rounded-md ">
        <img className="w-full h-60 rounded-md" src={cover} alt="" />
      </div>
      <div className="w-full h-60 p-2 flex flex-col">
        <div className="w-full">
          <TechnologyButton
            text={tag}
            color={"bg-indigo-50"}
            textColor={"text-indigo-500"}
            size={"sm"}
          />
          <h1>{title}</h1>
        </div>
        <div>
          <span className="none">
            <img src={userPro} alt="" />
            <p></p>
          </span>
          <span>{published_at}</span>
        </div>
      </div>
    </div>
  );
};
