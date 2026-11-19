"use client";

export function EventLoop() {
  console.log("Fatemeh");

  setTimeout(() => {
    console.log("timer 1");
  }, 10);

  Promise.resolve().then(() => {
    console.log("promise 1");
  });

  console.log("Ashnehdar");

  setTimeout(() => {
    console.log("timer 2");
  }, 10);

  Promise.resolve().then(() => {
    console.log("promise 2");
  });
  return (
    <div className="flex items-center">
      <p className="text-lg text-gray-700 pr-4 tracking-wide">Event loop :</p>
      <p className="text-lg text-gray-700 tracking-wide">console</p>
    </div>
  );
}
