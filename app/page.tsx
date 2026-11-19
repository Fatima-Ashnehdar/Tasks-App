import { Closure } from "./components/javascript/closure";
import { Debounce } from "./components/javascript/debounce";
import { EventLoop } from "./components/javascript/eventLoop";
import { ImmutableExample } from "./components/javascript/immutableUpdate";
import { PromiseAllSettled } from "./components/javascript/promiseAllSettled";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 bg-zinc-100 h-screen justify-center px-[8%] py-[5%]">
      <Closure />
      <Debounce />
      <ImmutableExample />
      <EventLoop />
      <PromiseAllSettled />
    </div>
  );
}
