"use client";
import React from "react";

const Button = ({
  text,
  actionId,
  icon,
  children,
  onClick,
}: {
  text?: string;
  actionId?: string;
  icon?: string;
  children?: Object;
  onClick?: (actionId?: string) => void;
}) => {
  return (
    <>
      <button
        className="bg-gradient-to-r from-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onClick && onClick(actionId)}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
