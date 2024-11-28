import React from "react";
import { TechnologyButton } from "./TechnologyButton";
import { UserPro } from "./UserPro";

export const Card = ({ cover, tag, title, user, published_at }) => {
  const colors = ["indigo-50"];
  return (
    <div className="w-[392px] h-[488px] p-4 rounded-xl border-[1px] border-[#E8E8EA] ">
      <div className="w-full h-60 rounded-md ">
        <img className="w-full h-60 rounded-md " src={cover} alt="" />
      </div>
      <div className="w-full h-60 p-2 flex flex-col mt-6">
        <div className="w-full">
          <TechnologyButton
            text={tag}
            color={"bg-indigo-50"}
            textColor={"text-indigo-500"}
            size={"sm"}
          />
          <h1 className="font-semibold h-[60px] overflow-hidden text-xl mt-4 mb-5 ">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {user && <UserPro user={user} />}
          <span className="text-[#97989F]">{published_at.slice(0, 10)}</span>
        </div>
      </div>
    </div>
  );
};
