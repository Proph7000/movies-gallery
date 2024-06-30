import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { IconButton, Stack, Typography } from '@mui/material'

import { IMovie, useFavoriteMoviesStore } from '@entities/movie'

export function FavoriteMoviesListItem({
  id,
  name,
}: Pick<IMovie, 'id' | 'name'>) {
  const setFavoriteMovies = useFavoriteMoviesStore((s) => s.setFavoriteMovies)

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography>{name}</Typography>

      <IconButton onClick={() => setFavoriteMovies(id, false)}>
        <CloseRoundedIcon />
      </IconButton>
    </Stack>
  )
}
