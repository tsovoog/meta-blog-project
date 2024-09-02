"use client";
import React, { useState } from "react";
import { Filter } from "./Filter";
import { LoadMoreButton } from "./LoadMoreButton";
import { Card } from "./Card";

export const AllPost = ({ post }) => {
  const [load, setLoad] = useState(9);
  const countHandler = () => {
    if (load >= post.length) {
      setLoad(9);
    } else {
      setLoad(load + 9);
    }
  };
  return (
    <div className="w-full mt-[100px] ">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-2xl">All Blog Post</h1>
        <Filter />
      </div>
      <div className="flex flex-wrap gap-5">
        {post
          .slice(0, load)
          .map(({ cover_image, published_at, title, tag_list }, index) => {
            return (
              <Card
                key={index}
                cover={cover_image}
                published_at={published_at}
                title={title}
                tag={tag_list[0]}
              />
            );
          })}
      </div>
      <LoadMoreButton countHandler={countHandler} />
    </div>
  );
};
