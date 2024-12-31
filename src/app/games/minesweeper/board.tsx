"use client";
import React, { useEffect, useState } from "react";
import { computeResults, generateBoard } from "./game-helper";
import SweeperGame from "./sweeper-game";
import Counter from "./counter";
import DisplayWinner from "@/app/shared/display-winner";

const Board = ({ size, bombs }: { size: number; bombs: number }) => {
  const [gameState, setGameState] = useState<(number | boolean)[][][] | null>(
    null
  );
  const [flags, setFlags] = useState(0);
  const [complete, setComplete] = useState(false);
  const [results, setResults] = useState<{
    foundBomb: number;
    mineBlast: boolean;
    stillMystery: number;
    won: boolean;
  }>();

  useEffect(() => {
    const game = generateBoard(size, bombs);
    const board = game.map((row) =>
      row.map((element) => [element, false, false])
    );
    setGameState(board);
    setResults(computeResults(board, bombs));
    return () => {};
  }, []);

  const chance = (i: number, j: number) => {
    if (gameState) {
      if (gameState[i][j][0] === -1 && !gameState[i][j][1]) {
        gameState[i][j][1] = true;
        if (i - 1 >= 0) {
          chance(i - 1, j);
          if (j - 1 >= 0) {
            chance(i - 1, j - 1);
          }
          if (j + 1 < size) {
            chance(i - 1, j + 1);
          }
        }
        if (j - 1 >= 0) {
          chance(i, j - 1);
        }
        if (j + 1 < size) {
          chance(i, j + 1);
        }
        if (i + 1 < size) {
          chance(i + 1, j);
          if (j - 1 >= 0) {
            chance(i + 1, j - 1);
          }
          if (j + 1 < size) {
            chance(i + 1, j + 1);
          }
        }
      }
      play(i, j);
    }
  };

  const play = (i: number, j: number) => {
    if (gameState && !gameState[i][j][2]) {
      if (gameState[i][j][0] === 0) {
        setComplete(true);
      }
      gameState[i][j][1] = true;
      finalizeGame();
      setGameState([...gameState]);
    }
  };

  const finalizeGame = () => {
    if (gameState) {
      const results = computeResults(gameState, bombs);
      setResults(results);
    }
  };

  const flag = (i: number, j: number) => {
    if (gameState) {
      if (gameState[i][j][2]) {
        gameState[i][j][2] = !gameState[i][j][2];
        setFlags(flags - 1);
      } else if (!gameState[i][j][2] && bombs - flags > 0) {
        gameState[i][j][2] = !gameState[i][j][2];
        setFlags(flags + 1);
      }
      finalizeGame();
      setGameState([...gameState]);
    }
  };

  return (
    <>
      {gameState && (
        <SweeperGame
          board={gameState}
          flags={flags}
          complete={complete}
          bombs={bombs}
          onPlay={chance}
          onFlag={flag}
          foundFlags={results?.foundBomb ?? 0}
        />
      )}
      {results?.won && (
        <DisplayWinner winnerName={"Player"} gameName={"Minesweeper"} />
      )}
    </>
  );
};

export default Board;
