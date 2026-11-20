"use client";

import { useRef, useState } from "react";

export function Debounce() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function search(text: string) {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setResult(text);
    }, 500);
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-lg text-gray-700 pr-4 tracking-wide">Debounce :</p>
      <div className="flex flex-col gap-y-1">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            search(e.target.value);
          }}
          placeholder="search..."
          className="border border-gray-800 rounded-lg p-3 cursor-pointer w-[20%]"
        />
        <div className="flex gap-x-6">
          <p className="tracking-wide">result :</p>
          <p className="tracking-wide">{result}</p>
        </div>
      </div>
    </div>
  );
}
