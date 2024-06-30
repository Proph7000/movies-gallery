import { Box, Stack } from '@mui/material'
import { TFavoriteMovie } from '../../model'
import { FavoriteMoviesListItem } from './favorite-movies-list-item'

interface IProps {
  favoriteMovies?: TFavoriteMovie[]
}

export function FavoriteMoviesList({ favoriteMovies }: IProps) {
  return (
    <Stack component="ul" sx={{ pl: 2 }}>
      {favoriteMovies?.map((movie) => (
        <Box key={movie.id} component="li">
          <FavoriteMoviesListItem id={movie.id} name={movie.name} />
        </Box>
      ))}
    </Stack>
  )
}
