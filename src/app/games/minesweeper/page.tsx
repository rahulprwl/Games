import React from "react";
import MineHome from "./mine-home";
import Header from "@/app/shared/header";
import Link from "next/link";
import Button from "@/app/shared/button";

const Page = () => {
  return (
    <div className="grid grid-flow-row">
      <Header heading="Welcome to Rp's Minesweeper" />
      <div className="my-2 text-center">
        <MineHome />
      </div>
      <Link href={"/"} className="my-5 text-center">
        <Button text="Back To Home" />
      </Link>
    </div>
  );
};

export default Page;
