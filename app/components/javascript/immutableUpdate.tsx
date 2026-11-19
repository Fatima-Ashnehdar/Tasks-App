"use client";

import { useState } from "react";

export function ImmutableExample() {
  const [user, setUser] = useState({
    id: 1,
    name: "Ali",
    age: 22,
    city: "Tehran",
  });

  const updateUser = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: "Reza",
      age: 25,
    }));
  };

  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-lg text-gray-700 pr-4 tracking-wide">
        Immutable update :
      </p>
      <div className="flex flex-col items-start gap-y-1">
        <h2 className="text-base text-blue-800 tracking-wide">User Profile</h2>
        <div className="flex gap-x-7">
          <p className="text-sm text-gray-700 tracking-wide">
            Name: {user.name}
          </p>
          <p className="text-sm text-gray-700 tracking-wide">Age: {user.age}</p>
          <p className="text-sm text-gray-700 tracking-wide">
            City: {user.city}
          </p>
        </div>
        <button
          onClick={updateUser}
          className="mt-2 cursor-pointer bg-blue-200 rounded-md py-1.5 px-3"
        >
          <p className="text-xs text-blue-700 tracking-wide"> Update User</p>
        </button>
      </div>
    </div>
  );
}
