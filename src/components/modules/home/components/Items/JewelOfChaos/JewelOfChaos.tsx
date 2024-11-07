import { useMemo } from "react";

interface Props {
  x: number;
  y: number;
}

function JewelOfChaos({ x, y }: Props) {
  const leftPos = useMemo(() => (x > 0 ? `${x * 64}px` : "0"), [x]);
  const topPos = useMemo(() => (y > 0 ? `${y * 64}px` : "0"), [y]);
  return (
    <div
      className={`absolute w-[60px] h-[60px] bg-yellow-600`}
      style={{
        left: leftPos,
        top: topPos,
      }}
    >
      Chaos
    </div>
  );
}

export { JewelOfChaos };
