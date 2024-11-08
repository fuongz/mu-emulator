export type Item = {
  _id: number
  id?: string
  x?: number
  y?: number
  width: number
  height: number
  quantity: number
  name: string
  uniqueName: string
  className?: any
  vectors?: Array<string>
}

export const ITEMS: Array<Item> = [
  {
    _id: 1,
    width: 1,
    height: 1,
    name: 'Jewel of Chaos',
    uniqueName: 'jewel_of_chaos',
    quantity: 1,
  },
  {
    _id: 2,
    width: 1,
    height: 1,
    name: 'Jewel of Bless',
    uniqueName: 'jewel_of_bless',
    quantity: 1,
  },
  {
    _id: 3,
    width: 1,
    height: 1,
    name: 'Jewel of Soul',
    uniqueName: 'jewel_of_soul',
    quantity: 1,
  },
  {
    _id: 4,
    width: 1,
    height: 1,
    name: 'Jewel of Life',
    uniqueName: 'jewel_of_life',
    quantity: 1,
  },
  {
    _id: 5,
    width: 1,
    height: 1,
    name: 'Jewel of Guardian',
    uniqueName: 'jewel_of_guardian',
    quantity: 1,
  },
  {
    _id: 6,
    width: 1,
    height: 1,
    name: 'Jewel of Harmony',
    uniqueName: 'jewel_of_harmony',
    quantity: 1,
  },
]
