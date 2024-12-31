import React from "react";
import Board from "./board";

const MineHome = () => {
  return (
    <div>
      <Board size={16} bombs={40} />
    </div>
  );
};

export default MineHome;
