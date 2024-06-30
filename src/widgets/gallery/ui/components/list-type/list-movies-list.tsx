import { Box, Stack } from '@mui/material'

import { IMoviesListProps } from '../../../model'
import { ListMoviesListItem } from './list-movies-list-item'

export function ListMoviesList({
  setSelectedMovieId,
  movies,
}: Omit<IMoviesListProps, 'listType'>) {
  return (
    <Stack spacing={2} component="ul" sx={{ listStyle: 'none' }}>
      {movies?.map((movie) => (
        <Box key={movie.id} component="li">
          <ListMoviesListItem
            setSelectedMovieId={setSelectedMovieId}
            description={movie.description}
            img={movie.img}
            id={movie.id}
            name={movie.name}
            year={movie.year}
            genres={movie.genres}
          />
        </Box>
      ))}
    </Stack>
  )
}
