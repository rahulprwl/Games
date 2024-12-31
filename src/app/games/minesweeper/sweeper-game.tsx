import React from "react";
import Block from "./block";
import CountersFlex from "./counters-flex";

const SweeperGame = ({
  board,
  flags,
  complete,
  bombs,
  foundFlags,
  onPlay,
  onFlag,
}: {
  board: (number | boolean)[][][];
  flags: number;
  complete: boolean;
  bombs: number;
  foundFlags: number;
  onPlay: (i: number, j: number) => void;
  onFlag: (i: number, j: number) => void;
}) => (
  <>
    <CountersFlex
      counters={[
        { label: "Mines", count: bombs },
        {
          label: "Flags",
          count: flags,
        },
        {
          label: "Remaining Flags",
          count: bombs - flags,
        },
        {
          label: "Found Bomb",
          count: foundFlags,
        },
      ]}
    />
    <div className="grid grid-rows-9 grid-flow-col justify-center">
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
