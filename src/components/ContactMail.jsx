import React from "react";
import { InputGlobal } from "./InputGlobal";

export const ContactMail = () => {
  return (
    <div className="flex w-[475px] flex-col gap-7 pb-[29px]">
      <h1 className="font-semibold text-lg">Leave a Message</h1>

      <div className="w-[478px] flex flex-col gap-7">
        <div className="flex gap-7 w-full ">
          <InputGlobal type={"text"} placeholder={"Your Name"} />
          <InputGlobal type={"text"} placeholder={"Your Email"} />
        </div>
        <InputGlobal
          type={"text"}
          placeholder={"Subject"}
          className={"w-full"}
        />
        <InputGlobal
          type={"text"}
          placeholder={"Write a message"}
          className={" h-[134px] w-full"}
        />
      </div>

      <button className="w-[140px] h-[30] p-2 bg-[#4B6BFB] text-white rounded-md">
        Send message
      </button>
    </div>
  );
};
