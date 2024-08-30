import React from "react";

const Blog = () => {
  async function page() {
    const result = await fetch("https://dev.to/api/articles");
    const obResult = await result.json();
  }
  return <div>
    
  </div>;
};

export default Blog;
