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
      <div className="text-xl font-serif text-green-700 animate-pulse p-3 m-4">{`Congratulations! ${winnerName} you won the ${gameName}`}</div>
    </>
  );
};

export default DisplayWinner;
