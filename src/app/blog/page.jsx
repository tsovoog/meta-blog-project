import { Allblog } from "@/components/Allblog";

import React from "react";

const Blog = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const obResult = await result.json();
  return (
    <div className="w-307.5 flex flex-col mx-auto">
      <Allblog post={obResult} />
    </div>
  );
};

export default Blog;
