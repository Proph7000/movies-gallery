import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { Paper, Stack, Typography } from '@mui/material'
import { useMemo } from 'react'

import { IMovie, useFavoriteMoviesStore } from '@entities/movie'

import { TFavoriteMovie } from '../model'
import { FavoriteMoviesList } from './components'

interface IProps {
  movies?: IMovie[]
}

export function FavoriteMovies({ movies }: IProps) {
  const favoriteMoviesIds = useFavoriteMoviesStore((s) => s.favoriteMovies)

  const favoriteMovies = useMemo(() => {
    const filteredMovies = movies
      ?.map(
        (movie) =>
          favoriteMoviesIds[movie.id]?.status && {
            ...movie,
            order: favoriteMoviesIds[movie.id].order,
          }
      )
      ?.filter((movie) => movie) as TFavoriteMovie[] | undefined

    return filteredMovies?.sort((a, b) => a.order - b.order)
  }, [favoriteMoviesIds, movies])

  return (
    <Paper sx={{ padding: 2, borderRadius: 2 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h4">Favorite list</Typography>
        <StarBorderOutlinedIcon sx={{ ml: 'auto !important' }} />
      </Stack>

      {favoriteMovies?.length === 0 && (
        <Typography variant="h5">Favorite list is empty</Typography>
      )}

      <FavoriteMoviesList favoriteMovies={favoriteMovies} />
    </Paper>
  )
}
