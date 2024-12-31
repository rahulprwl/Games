"use client";
import React, { useState } from "react";
import { generateBoard } from "./game-helper";

const Board = ({ size, bombs }: { size: number; bombs: number }) => {
  const [gameState, setGameState] = useState(generateBoard(size, bombs));
  return <div>Board</div>;
};

export default Board;
