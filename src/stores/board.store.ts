import type { Item } from "@/constants/items";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IBoardStore {
  items: Array<Item> | [];

  append: (item: Item) => void;
  reset: () => void;
}

const useBoardStore = create(
  devtools(
    persist<IBoardStore>(
      (set) => ({
        items: [],
        append: (item) => {
          set((state) => ({
            items: [...state.items, item],
          }));
        },
        reset: () => {
          set(() => ({
            items: [],
          }));
        },
      }),
      {
        name: "board-store",
      }
    )
  )
);

export { useBoardStore };
