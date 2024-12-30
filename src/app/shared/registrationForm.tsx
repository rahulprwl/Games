"use client";

import { useState } from "react";

export default ({
  addressee,
  onSubmit,
  onCancel,
}: {
  addressee: string;
  onSubmit: any;
  onCancel: any;
}) => {
  const [name, setName] = useState("");
  return (
    <>
      <div className="border-solid border-white p-4">
        <div className="py-2">
          <span className="">Name of the {addressee}:</span>
          <span className="ml-2">
            <input
              type="text"
              className="text-black"
              onChange={(event) => setName(event.target.value)}
            />
          </span>
        </div>
        <div className="py-2 content-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>onSubmit({name:name})}>
            Submit
          </button>
          <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
