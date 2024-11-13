export type Item = {
  _id: number
  id?: string
  x?: number
  y?: number
  width: number
  height: number
  quantity: number
  upgradeable: boolean
  levelUpgrade?: number
  name: string
  className?: string | null | undefined
  vectors?: Array<string>
}

export const BLESS_ID: number = 2
export const SOUL_ID: number = 3

export const ITEMS: Array<Item> = [
  {
    _id: 1,
    width: 1,
    height: 1,
    name: "JEWEL_OF_CHAOS",
    upgradeable: false,
    quantity: 1,
  },
  {
    _id: 2,
    width: 1,
    height: 1,
    name: "JEWEL_OF_BLESS",
    upgradeable: false,
    quantity: 1,
  },
  {
    _id: 3,
    width: 1,
    height: 1,
    name: "JEWEL_OF_SOUL",
    upgradeable: false,
    quantity: 1,
  },
  {
    _id: 4,
    width: 1,
    height: 1,
    name: "JEWEL_OF_LIFE",
    upgradeable: false,
    quantity: 1,
  },
  {
    _id: 5,
    width: 1,
    height: 1,
    name: "JEWEL_OF_GUARDIAN",
    upgradeable: false,
    quantity: 1,
  },
  {
    _id: 6,
    width: 1,
    height: 1,
    name: "JEWEL_OF_HARMONY",
    upgradeable: false,
    quantity: 1,
  },
  {
    _id: 7,
    width: 1,
    height: 3,
    upgradeable: true,
    levelUpgrade: 0,
    name: "SWORD_OF_DESTRUCTION",
    quantity: 1,
  },
]
