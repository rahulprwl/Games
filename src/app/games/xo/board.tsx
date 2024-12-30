import Block from "./block";

export default () => {
  const gameState: ("X" | "O" | "-")[][] = [
    ["-", "X", "O"],
    ["-", "-", "-"],
    ["X", "-", "-"],
  ];
  return (
    <div className="p-4 grid grid-rows-3 grid-flow-col">
      {gameState.map((row, idx) => (
        <div key={idx}>
          {row.map((block, idx2) => (
            <Block key={idx + idx2} value={block} />
          ))}
        </div>
      ))}
    </div>
  );
};
