import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IGlobalStore {
  lang: string
}

const useGlobalStore = create(
  devtools(
    persist<IGlobalStore>(
      () => ({
        lang: 'en',
      }),
      {
        name: 'global-store',
      }
    )
  )
)

export { useGlobalStore }
