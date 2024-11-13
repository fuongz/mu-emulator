import { Item } from "@/constants/items"

export function useUpgradeItem() {
  function getStatusWithRatio(ratio: number) {
    const tickets = Array(ratio)
      .fill(true)
      .concat(Array(100 - ratio).fill(false))
      .sort(() => Math.random() - 0.5)
    const result = tickets[Math.floor(Math.random() * tickets.length)]
    console.log("TICKETS:", tickets, result)
    return result
  }

  const withBless = (item: Item) => {
    if (typeof item.levelUpgrade === "undefined") return item
    if (item.levelUpgrade > 6) return item
    const status = getStatusWithRatio(100)
    return status === true
      ? { ...item, levelUpgrade: item.levelUpgrade + 1 }
      : {
          ...item,
          levelUpgrade: item.levelUpgrade <= 0 ? 0 : item.levelUpgrade - 1,
        }
  }

  const withSoul = (item: Item) => {
    if (typeof item.levelUpgrade === "undefined") return item
    if (item.levelUpgrade > 9) return item
    const status = getStatusWithRatio(50)
    const downgradeLevel = item.levelUpgrade > 7 ? item.levelUpgrade : 1
    return status === true
      ? { ...item, levelUpgrade: item.levelUpgrade + 1 }
      : {
          ...item,
          levelUpgrade:
            item.levelUpgrade <= 0 ? 0 : item.levelUpgrade - downgradeLevel,
        }
  }

  return {
    withBless,
    withSoul,
  }
}
