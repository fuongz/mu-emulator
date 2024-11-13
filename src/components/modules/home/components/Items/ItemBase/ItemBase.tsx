"use client"

import React from "react"

import { useItem, useUpgradeItem } from "@/hooks"
import type { SyntheticEvent } from "react"
import styles from "./styles.module.css"
import { BLESS_ID, Item, SOUL_ID } from "@/constants/items"
import { useBoardStore } from "@/stores"

interface Props {
  item: Item
  locked?: boolean
}

const ItemBase = ({ item, locked }: Props) => {
  const { x, y, width, height, _id, id, name, levelUpgrade } = item
  const { activeItem, pickItem, update, remove } = useBoardStore()
  const { withBless, withSoul } = useUpgradeItem()
  const { position, size } = useItem({
    x,
    y,
    width: width || 5,
    height: height || 3,
  })

  const handleOnClick = () => {
    if (!activeItem) {
      pickItem(item)
    } else {
      if (
        (BLESS_ID === activeItem._id || SOUL_ID === activeItem._id) &&
        item.upgradeable &&
        typeof item.levelUpgrade !== "undefined"
      ) {
        if (activeItem._id === BLESS_ID && item.levelUpgrade < 6) {
          update(withBless(item))
          remove(activeItem)
        } else if (activeItem._id === SOUL_ID && item.levelUpgrade < 9) {
          update(withSoul(item))
          remove(activeItem)
        }
      }
    }
  }

  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    ;(e.target as HTMLImageElement).src = "/file.svg"
  }

  return (
    <div
      className={`${styles.item} ${activeItem && activeItem.id === id && !locked ? "hidden" : ""}`}
      style={{
        left: typeof locked !== "undefined" && locked ? 0 : position.left,
        top: typeof locked !== "undefined" && locked ? 0 : position.top,
        height: size.height,
        width: size.width,
      }}
      onClick={() => {
        handleOnClick()
      }}
    >
      <div className="absolute w-2/3 h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          alt={name}
          onError={(e) => handleImgError(e)}
          className="w-full h-full"
          src={`/items/Item${_id}.svg`}
        />
        {levelUpgrade && <span>+{levelUpgrade}</span>}
        <span
          className="absolute -top-5"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            remove(item)
          }}
        >
          Del
        </span>
      </div>
    </div>
  )
}

export { ItemBase }
