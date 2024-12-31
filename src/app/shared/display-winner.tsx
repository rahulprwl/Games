import React from "react";

const DisplayWinner = ({
  winnerName,
  gameName,
}: {
  winnerName: string;
  gameName: string;
}) => {
  return (
    <>
      <span className="text-pretty text-xl font-serif text-green-700">{`Congratulations! ${winnerName} you won the ${gameName}`}</span>
    </>
  );
};

export default DisplayWinner;
