'use client'

import { useItem } from '@/hooks'
import type { SyntheticEvent } from 'react'
import styles from './styles.module.css'
import type { Item } from '@/constants/items'
import { useBoardStore } from '@/stores'

interface Props {
  item: Item
  locked?: boolean
}

function ItemBase({ item, locked }: Props) {
  const { x, y, width, height, _id, id, name } = item
  const { activeItem, pickItem } = useBoardStore()
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
      console.log(item, activeItem)
    }
  }

  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    ;(e.target as HTMLImageElement).src = '/file.svg'
  }

  return (
    <div
      className={`${styles.item} ${activeItem && activeItem.id === id && !locked ? 'hidden' : ''}`}
      style={{
        left: typeof locked !== 'undefined' && locked === true ? 0 : position.left,
        top: typeof locked !== 'undefined' && locked === true ? 0 : position.top,
        height: size.height,
        width: size.width,
      }}
      onClick={() => {
        handleOnClick()
      }}
    >
      <div className="absolute w-2/3 h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img alt={name} onError={(e) => handleImgError(e)} className="w-full h-full" src={`/items/Item${_id}.svg`} />
      </div>
    </div>
  )
}

export { ItemBase }
