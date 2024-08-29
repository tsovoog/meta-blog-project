import { AllPost } from "@/components/AllPost";
import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";
import React from "react";

const Home = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const obResult = await result.json();

  return (
    <div className="w-307.5 flex flex-col mx-auto">
      <Hero />
      <Trending />
      <AllPost post={obResult} />
    </div>
  );
};

export default Home;
