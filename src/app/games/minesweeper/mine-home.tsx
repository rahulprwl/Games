import React from "react";
import Board from "./board";

const MineHome = () => {
  return (
    <div>
      <Board size={9} bombs={16} />
    </div>
  );
};

export default MineHome;
