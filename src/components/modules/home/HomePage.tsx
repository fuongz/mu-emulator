'use client'

import { useBoardStore } from '@/stores'
import { Board } from './components/Board/Board'
import { useInventory } from '@/hooks'
import { toast } from 'sonner'
import { ItemBase } from './components/Items/ItemBase/ItemBase'
import { useRef } from 'react'
import { useMouse } from 'react-use'

function HomePage() {
  const { items, activeItem, append, reset } = useBoardStore()
  const { items: boardItems, random } = useInventory(items)

  const playgroundRef = useRef(null)
  const activeItemRef = useRef(null)
  const { elX, elY } = useMouse(playgroundRef)

  const handleGenerateRandomItem = () => {
    const { data, error } = random()
    if (error) {
      toast.error(error)
    }
    if (data) {
      append(data)
    }
  }

  return (
    <>
      {activeItem && (
        <>
          <div
            ref={activeItemRef}
            style={{
              position: 'absolute',
              left: `${elX}px`,
              top: `${elY}px`,
              pointerEvents: 'none',
            }}
            className="absolute"
          >
            <ItemBase locked item={activeItem} />
          </div>
        </>
      )}

      <div ref={playgroundRef}>
        <div className="w-[508px] mx-auto">
          <div id="board" className="grid grid-cols-8 gap-1 relative">
            <Board />
            {boardItems.length > 0 && boardItems.map((item) => <ItemBase key={item.id} item={item} />)}
          </div>

          <div className="z-50 relative">
            <button
              onClick={() => {
                handleGenerateRandomItem()
              }}
            >
              Add item
            </button>
            <button
              onClick={() => {
                reset()
              }}
            >
              Clear inventory
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export { HomePage }
