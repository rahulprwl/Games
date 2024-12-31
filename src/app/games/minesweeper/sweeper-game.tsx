import React from "react";
import Counter from "./counter";
import Block from "./block";

const SweeperGame = ({
  board,
  flags,
  complete,
  bombs,
  onPlay,
  onFlag,
}: {
  board: (number | boolean)[][][];
  flags: number;
  complete: boolean;
  bombs: number;
  onPlay: (i: number, j: number) => void;
  onFlag: (i: number, j: number) => void;
}) => (
  <>
    <Counter label={"Mines"} count={bombs}></Counter>
    <Counter label={"Flags"} count={flags}></Counter>
    <Counter label={"Remaining Flags"} count={bombs - flags}></Counter>
    <div className="grid grid-rows-9 grid-flow-col justify-start">
      {board &&
        board.map((row, i) =>
          row.map((element, j) => (
            <Block
              key={`${i}${j}`}
              value={getDisplayValue(
                element[0],
                element[1],
                element[2],
                complete
              )}
              onClick={() => {
                onPlay(i, j);
              }}
              onRightClick={() => {
                onFlag(i, j);
              }}
              disabled={false}
            />
          ))
        )}
    </div>
  </>
);

const getDisplayValue = (
  val: number | boolean,
  unCovered: number | boolean,
  flagged: number | boolean,
  complete: boolean
) => {
  if (complete) {
    return val.toString();
  }
  return flagged ? "F" : unCovered ? val.toString() : "-";
};

export default SweeperGame;
