import React from "react";
import Counter from "./counter";

const CountersFlex = ({
  counters,
}: {
  counters: { label: string; count: number }[];
}) => {
  return (
    <div className="grid grid-flow-col mb-3">
      {counters.map((counter, i) => (
        <Counter key={i} label={counter.label} count={counter.count} />
      ))}
    </div>
  );
};

export default CountersFlex;
