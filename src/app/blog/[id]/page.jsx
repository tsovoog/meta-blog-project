import React from "react";
import { UserPro } from "@/components/UserPro";

const SingleBlog = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://dev.to/api/articles/${id}`);
  if (!res.ok) {
    return <div>Error loading blog</div>;
  }

  const data = await res.json();

  return (
    <div className="w-[75%] flex flex-col mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      {data.user && <UserPro user={data.user} />}
      {data.cover_image && (
        <img src={data.cover_image} alt={data.title} className="mb-4" />
      )}
      <div
        dangerouslySetInnerHTML={{ __html: data.body_html }}
        className="prose max-w-none"
      />
      <div></div>
    </div>
  );
};

export default SingleBlog;
