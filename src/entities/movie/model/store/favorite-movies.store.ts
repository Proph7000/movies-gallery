import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type TId = string | number

interface IFavoriteMovie {
  status: boolean
  order: number
}

interface IFavoriteMoviesState {
  favoriteMovies: Record<TId, IFavoriteMovie>
  setFavoriteMovies: (id: TId, status: boolean) => void

  maxOrder: number
}

export const useFavoriteMoviesStore = create<IFavoriteMoviesState>()(
  persist(
    immer((set) => ({
      maxOrder: 0,
      favoriteMovies: {},
      setFavoriteMovies: (id, status) =>
        set((state) => {
          state.favoriteMovies[id] = {
            status,
            order: status ? state.maxOrder : state.favoriteMovies[id].order,
          }

          if (status) {
            state.maxOrder += 1
          }
        }),
    })),
    { name: 'favorite-movies' }
  )
)
