`use client`;
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
  const router = [
    { href: "/", title: "Home" },
    { href: "/contact", title: "Contact" },
    {
      href: "/blog",
      title: "Blog",
    },
  ];
  return (
    <div className="py-10">
      <header className="flex justify-between">
        <div>
          <img className="w-[158px] h-9" src="Logo.png" alt="meta-blog-logo" />
        </div>
        <div className="flex items-center gap-10">
          {router.map(({ href, title }) => (
            <Link href={href}>{title}</Link>
          ))}
        </div>
        <div className="flex items-center  bg-gray-100 pr-2 rounded-md">
          <input
            className="flex bg-gray-100 px-4 py-2 w-[114px] rounded-md"
            type="text "
            value=""
            placeholder="Search "
          />
          <IoIosSearch className="w-5 h-5" />
        </div>
      </header>
    </div>
  );
};
