import React from "react";
import { ContactButton } from "./ContactButton";
import { ContactMail } from "./ContactMail";

export const ContactPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-4xl">Contact Us</div>
        <p className="text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div className="flex pt-9 ">
        <ContactButton
          title={"Address"}
          desc={"1328 Oak Ridge Drive, Saint Louis, Missouri"}
        />
        <ContactButton title={"Contact"} desc={"313-332-8662 info@email.com"} />
      </div>
      <div className="w-full h-[450px] pl-[35px] py-[44px] pr-[130px] rounded-lg bg-[#F6F6F7] mt-[30px] mb-[166px] ">
        <ContactMail />
      </div>
    </div>
  );
};
