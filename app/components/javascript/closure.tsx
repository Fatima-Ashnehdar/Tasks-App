"use client";

/**@format */

import { useState } from "react";

function closure() {
  let counter = 20;
  return {
    plus: () => ++counter,
    minus: () => --counter,
  };
}

export function Closure() {
  const [counter] = useState(closure);
  const [count, setCount] = useState(20);

  const closureButtons = [
    { id: 1, label: "-", action: counter.minus },
    { id: 2, label: "+", action: counter.plus },
  ];

  return (
    <div className="flex items-center gap-x-4">
      <p className="text-lg text-gray-700 pr-4 tracking-wide">Closure :</p>
      {closureButtons.map((button, index) => (
        <div key={button.id} className="flex gap-x-4">
          {index === 1 && <p className="text-base text-gray-700">{count}</p>}
          <button
            onClick={() => setCount(button.action())}
            className="bg-gray-200 px-2.5 rounded-md cursor-pointer"
          >
            <p className="text-lg text-gray-700 tracking-wide">
              {button.label}
            </p>
          </button>
        </div>
      ))}
    </div>
  );
}
