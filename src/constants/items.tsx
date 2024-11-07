export type Item = {
  id?: string;
  x?: number;
  y?: number;
  width: number;
  height: number;
  quantity: number;
  name: string;
  className?: any;
  vectors?: Array<string>;
};

export const ITEMS: Array<Item> = [
  {
    width: 1,
    height: 1,
    name: "Jewel of Chaos",
    className: `bg-orange-500 bg-opacity-50 text-black h-full w-full`,
    quantity: 1,
  },
  {
    width: 1,
    height: 1,
    name: "Jewel of Bless",
    className: `bg-violet-500 bg-opacity-50 text-black h-full w-full`,
    quantity: 1,
  },
  {
    width: 1,
    height: 1,
    name: "Jewel of Soul",
    className: `bg-pink-500 bg-opacity-50 text-black h-full w-full`,
    quantity: 1,
  },
  {
    width: 1,
    height: 1,
    name: "Jewel of Life",
    className: `bg-yellow-500 bg-opacity-50 text-black h-full w-full`,
    quantity: 1,
  },
];
