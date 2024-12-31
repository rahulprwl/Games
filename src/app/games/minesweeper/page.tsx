import React from "react";
import MineHome from "./mine-home";
import Header from "@/app/shared/header";

const Page = () => {
  return (
    <div>
      <Header heading="Welcome to Rp's Minesweeper" />
      <MineHome />
    </div>
  );
};

export default Page;
