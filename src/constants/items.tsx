export type Item = {
  _id: number
  id?: string
  x?: number
  y?: number
  width: number
  height: number
  quantity: number
  name: string
  className?: string | null | undefined
  vectors?: Array<string>
}

export const JEWEL_IDS: Array<number> = []

export const ITEMS: Array<Item> = [
  {
    _id: 1,
    width: 1,
    height: 1,
    name: 'JEWEL_OF_CHAOS',
    quantity: 1,
  },
  {
    _id: 2,
    width: 1,
    height: 1,
    name: 'JEWEL_OF_BLESS',
    quantity: 1,
  },
  {
    _id: 3,
    width: 1,
    height: 1,
    name: 'JEWEL_OF_SOUL',
    quantity: 1,
  },
  {
    _id: 4,
    width: 1,
    height: 1,
    name: 'JEWEL_OF_LIFE',
    quantity: 1,
  },
  {
    _id: 5,
    width: 1,
    height: 1,
    name: 'JEWEL_OF_GUARDIAN',
    quantity: 1,
  },
  {
    _id: 6,
    width: 1,
    height: 1,
    name: 'JEWEL_OF_HARMONY',
    quantity: 1,
  },
  {
    _id: 7,
    width: 1,
    height: 3,
    name: 'SWORD_OF_DESTRUCTION',
    quantity: 1,
  },
]
