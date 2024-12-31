"use client";

import React from "react";
import { useState } from "react";
import Block from "./block";
import { checkWinningCombination } from "./GameHelper";
import DisplayWinner from "@/app/shared/display-winner";

const Board = () => {
  const gameState: ("X" | "O" | "-")[][] = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];

  const [game, setGame] = useState(gameState);
  const [turn, setTurn] = useState<"X" | "O" | "-">("X");
  const [winnerName, setWinnerName] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);

  const play = (i: number, j: number) => {
    if (!winnerName) game[i][j] = turn;
    checkWinner();
    setTurn(turn == "X" ? "O" : "X");
    setGame([...game]);
  };

  const checkWinner = () => {
    const winner = checkWinningCombination(game);
    if (winner !== "-") {
      setWinnerName(winner);
    }
  };

  return (
    <div className="grid-flow-row">
      <div className="p-4 grid grid-rows-3 grid-flow-col">
        {game.map((row, idx) => (
          <div key={idx}>
            {row.map((block, idx2) => (
              <Block
                key={idx + idx2}
                value={block}
                disabled={game[idx][idx2] !== "-"}
                onClick={() => {
                  play(idx, idx2);
                }}
              />
            ))}
          </div>
        ))}
      </div>
      {winnerName && (
        <DisplayWinner winnerName={winnerName} gameName="Tic Tac" />
      )}
    </div>
  );
};

export default Board;
