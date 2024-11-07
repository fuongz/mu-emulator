import { useMemo } from "react";

interface Props {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export function useItem({ x, y, width, height }: Props) {
  const left = useMemo(() => (x && x > 0 ? `${x * 64}px` : "0"), [x]);
  const top = useMemo(() => (y && y > 0 ? `${y * 64}px` : "0"), [y]);
  const sizeW = `${(width ? width : 1) * 64 - 4}px`;
  const sizeH = `${(height ? height : 1) * 64 - 4}px`;
  return {
    position: { left, top },
    size: {
      width: sizeW,
      height: sizeH,
    },
  };
}
