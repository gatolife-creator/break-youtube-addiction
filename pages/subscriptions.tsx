import { Board } from "@/components/Board";

export default function Subscriptions() {
  return (
    <div className="mx-auto w-4/5">
      <div className="grid grid-cols-3 gap-1">
        <Board />
        <Board />
        <Board />
      </div>
    </div>
  );
}
