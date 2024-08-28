"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  const contact = [
    { names: "Email:", info: " info@jstemplate.net" },
    {
      names: "Phone:",
      info: " 880 123 456 789",
    },
  ];
  return (
    <div className="bg-gray-100 flex justify-center py-16 mt-[69px]">
      <div className="w-307.5 ">
        <div className="h-[236px] flex justify-between">
          <div className="w-[289px] h-full">
            <h1 className="text-lg font-bold mb-3">About </h1>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            {contact.map(({ names, info }) => (
              <ul className="flex flex-col gap-1">
                <li>
                  {names}
                  <span className="text-gray-500"> {info}</span>
                </li>
              </ul>
            ))}
          </div>
          <div className="w-[521px] h-[88px] flex justify-center">
            <ul className="text-gray-700 flex flex-col gap-2">
              <li>Home</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-[144px] h-4 flex justify-between text-gray-500 mr-[221px]">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        <div className="flex justify-between h-[95px] items-center mt-[25px]">
          <div>
            <img src="Copyright info.png" alt="logo " />
          </div>
          <div>
            <ul className="flex gap-4 text-gray-500">
              <li>Terms of Use </li>
              <li>|</li>
              <li>Privacy Policy </li>
              <li>|</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
