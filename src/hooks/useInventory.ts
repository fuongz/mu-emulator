import { Item, ITEMS } from '@/constants/items'
import { useMemo, useState } from 'react'
import { v7 } from 'uuid'

const GRID_COUNT = 8

const useInventory = (initialItems: Array<Item> = []) => {
  const boardItems = useMemo<Array<Item>>(() => {
    return initialItems
  }, [initialItems])

  const filledPositions = useMemo<Array<string>>(() => {
    return initialItems.map((e) => e.vectors || []).flat(1)
  }, [initialItems])

  const emptyPositions = useMemo<{ positions: Array<{ x: number; y: number }>; vectors: Array<string> }>(() => {
    const emptyPositions = []
    const emptyPositionVectors = []
    for (let j = 0; j < GRID_COUNT; j++) {
      for (let i = 0; i < GRID_COUNT; i++) {
        if (!filledPositions.includes(`${i}:${j}`)) {
          emptyPositions.push({
            x: i,
            y: j,
          })
          emptyPositionVectors.push(`${i}:${j}`)
        }
      }
    }

    return { positions: emptyPositions, vectors: emptyPositionVectors }
  }, [initialItems, filledPositions])

  const isValidVector = (item: Item) => {
    if (typeof item.x === 'undefined' || typeof item.y === 'undefined') return false
    let positions: Array<string> = []
    ;[...Array(item.width)].forEach((_, i) =>
      [...Array(item.height)].forEach((_, j) => {
        positions.push(`${typeof item.x !== 'undefined' ? item.x + i : 0}:${typeof item.y !== 'undefined' ? item.y + j : 0}`)
      })
    )
    return positions.every((pos) => emptyPositions.vectors.includes(pos)) ? positions : null
  }

  const getValidSpace = (item: Item) => {
    let validItem = null

    for (let i = 0; i < emptyPositions.vectors.length; i++) {
      const [x, y] = emptyPositions.vectors[i].split(':')
      const hasSlot = isValidVector({ ...item, x: parseInt(x), y: parseInt(y) })
      if (!validItem && hasSlot) {
        validItem = {
          ...item,
          x: parseInt(x),
          y: parseInt(y),
          vectors: hasSlot,
        }
        break
      }
    }
    return validItem
  }

  const randomItem = () => {
    const RANDOM_ITEM = ITEMS[Math.floor(Math.random() * ITEMS.length)]
    return put(RANDOM_ITEM)
  }

  const put = (item: Item, x: number | null = null, y: number | null = null) => {
    if (emptyPositions.positions.length === 0) {
      return { data: null, error: 'Full inventory!' }
    }

    if (item.x === x && item.y === y) {
      return { data: item, error: null }
    }

    const newPosition = {
      ...item,
      id: typeof item.id === 'undefined' ? v7() : item.id,
      x: x === null ? emptyPositions.positions[0].x : x,
      y: y === null ? emptyPositions.positions[0].y : y,
    }

    const vectors = isValidVector(newPosition)
    if (vectors) {
      return {
        data: {
          ...newPosition,
          vectors,
        },
        error: null,
      }
    }

    return { data: null, error: 'No space available!' }
  }

  return { items: boardItems, random: randomItem, put }
}

export { useInventory }
