import { Item, ITEMS } from "@/constants/items";
import { useMemo, useState } from "react";
import { v7 } from "uuid";

const useInventory = (initialItems: Array<Item> = []) => {
  const boardItems = useMemo<Array<Item>>(() => {
    return initialItems;
  }, [initialItems]);

  const isValidVector = (item: Item, board: Array<string>) => {
    if (typeof item.x === "undefined" || typeof item.y === "undefined")
      return false;
    let positions: Array<string> = [];
    [...Array(item.width)].forEach((_, i) =>
      [...Array(item.height)].forEach((_, j) => {
        positions.push(
          `${typeof item.x !== "undefined" ? item.x + i : 0}:${
            typeof item.y !== "undefined" ? item.y + j : 0
          }`
        );
      })
    );
    return positions.every((pos) => board.includes(pos)) ? positions : null;
  };

  const getValidSpace = (item: Item, board: Array<string>) => {
    let validItem = null;
    for (let i = 0; i < board.length; i++) {
      const [x, y] = board[i].split(":");
      const hasSlot = isValidVector(
        { ...item, x: parseInt(x), y: parseInt(y) },
        board
      );
      if (!validItem && hasSlot) {
        validItem = {
          ...item,
          x: parseInt(x),
          y: parseInt(y),
          vectors: hasSlot,
        };
        break;
      }
    }
    return validItem;
  };

  const randomItem = () => {
    const RANDOM_ITEM = ITEMS[Math.floor(Math.random() * ITEMS.length)];
    const GRID_COUNT = 8;
    const filledPositions = boardItems.map((e) => e.vectors || []).flat(1);
    const emptyPositions = [];
    const emptyPositionVectors = [];
    for (let j = 0; j < GRID_COUNT; j++) {
      for (let i = 0; i < GRID_COUNT; i++) {
        if (!filledPositions.includes(`${i}:${j}`)) {
          emptyPositions.push({
            x: i,
            y: j,
          });
          emptyPositionVectors.push(`${i}:${j}`);
        }
      }
    }
    if (emptyPositions.length === 0) {
      return { data: null, error: "Full inventory!" };
    }

    const newItem = getValidSpace(
      {
        ...RANDOM_ITEM,
        id: v7(),
        x: emptyPositions[0].x,
        y: emptyPositions[0].y,
      },
      emptyPositionVectors
    );

    if (newItem) {
      return { data: newItem, error: null };
    }

    return { data: null, error: "No space available!" };
  };

  return { items: boardItems, random: randomItem };
};

export { useInventory };
