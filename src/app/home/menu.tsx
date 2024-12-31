"use client";
import React from "react";
import Button from "../shared/button";
import Link from "next/link";

const Menu = () => {
  return (
    <menu>
      <Link href={"games/xo"}>
        <Button actionId={"TicTac"} text={" Play TicTac"}></Button>
      </Link>
    </menu>
  );
};

export default Menu;