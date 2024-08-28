import { AllPost } from "@/components/AllPost";
import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <AllPost />
    </div>
  );
};

export default Home;
