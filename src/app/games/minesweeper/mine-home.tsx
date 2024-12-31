import React from "react";
import Board from "./board";

const MineHome = () => {
  return (
    <>
      <Board size={9} bombs={16} />
    </>
  );
};

export default MineHome;
