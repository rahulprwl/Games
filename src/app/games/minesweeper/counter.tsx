import React from "react";

const Counter = ({ label, count }: { label: string; count: number }) => {
  return (
    <div className=" grid grid-flow-row grid-cols-12">
      <div className="border-2 border-teal-200 border-solid bg-teal-800 p-2 text-center">
        <div className="text-sm col-span-1 text-blue-300">{label}</div>
        <div className="col-span-1 text-lime-500">{count}</div>
      </div>
    </div>
  );
};

export default Counter;
