import { Fragment, MouseEvent } from 'react'
import styles from './style.module.css'
import { useBoardStore } from '@/stores'
import { useInventory } from '@/hooks'
import { toast } from 'sonner'

function Board() {
  const { activeItem, pickItem, items, update } = useBoardStore()
  const { put } = useInventory(items)

  const handleOnClick = (e: MouseEvent, y: number, x: number) => {
    if (activeItem && activeItem.x === x && activeItem.y) {
      pickItem(null)
    } else if (activeItem) {
      const { data, error } = put(activeItem, x, y)

      if (error) {
        toast.error(error)
      }
      if (data) {
        update(data)
        pickItem(null)
      }
    }
  }

  return [...Array(8)].map((_, i: number) => (
    <Fragment key={i}>
      {[...Array(8)].map((_, j) => (
        <div key={`board-item-${i}-${j}`} className={styles.boardItem} onClick={(e) => handleOnClick(e, i, j)} />
      ))}
    </Fragment>
  ))
}

export { Board }
