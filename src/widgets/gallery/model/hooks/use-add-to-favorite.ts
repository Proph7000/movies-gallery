import { MouseEvent } from 'react'

import { useFavoriteMoviesStore } from '@entities/movie'

export function useAddToFavorite() {
  const favoriteMovies = useFavoriteMoviesStore((s) => s.favoriteMovies)
  const setFavoriteMovies = useFavoriteMoviesStore((s) => s.setFavoriteMovies)

  const handleClickAddToFavorite = (
    e: MouseEvent<HTMLAnchorElement>,
    id: number
  ) => {
    e.stopPropagation()

    setFavoriteMovies(id, !favoriteMovies[id]?.status)
  }

  return handleClickAddToFavorite
}
