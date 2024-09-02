import React from "react";

export const UserPro = ({ user }) => {
  return (
    <div className="flex items-center gap-5">
      <span className="flex gap-3 items-center">
        <img
          src={user.profile_image}
          className="rounded-full w-[36px] h-[36px]"
          alt=""
        />
        <p className="font-medium text-[#97989F]">{user.name}</p>
      </span>
    </div>
  );
};
