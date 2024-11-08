import type { Item } from '@/constants/items'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IBoardStore {
  items: Array<Item> | []
  activeItem: Item | null

  append: (item: Item) => void
  reset: () => void
  pickItem: (item: Item | null) => void
  update: (item: Item) => void
}

const useBoardStore = create(
  devtools(
    persist<IBoardStore>(
      (set) => ({
        items: [],
        activeItem: null,

        pickItem: (item) => {
          set(() => ({
            activeItem: item,
          }))
        },

        append: (item) => {
          set((state) => ({
            items: [...state.items, item],
          }))
        },

        update: (item) => {
          set((state) => ({
            items: [...state.items.filter((i) => i.id !== item.id), item],
          }))
        },

        reset: () => {
          set(() => ({
            items: [],
          }))
        },
      }),
      {
        name: 'board-store',
      }
    )
  )
)

export { useBoardStore }
