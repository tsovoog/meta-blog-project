import React from "react";
import { UserPro } from "@/components/UserPro";
const SingleBlog = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();

  return (
    <div className="w-307.5 flex flex-col mx-auto">
      <div>{data.title}</div>
      {user && <UserPro user={user} />}
      <img src={data.cover_image} alt="" />
      {data.body_html}
    </div>
  );
};

export default SingleBlog;
