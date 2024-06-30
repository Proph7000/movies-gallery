import { Grid } from '@mui/material'

import { IMoviesListProps } from '../../../model'
import { GridMoviesListItem } from './grid-movies-list-item'

export function GridMoviesList({
  setSelectedMovieId,
  movies,
}: Omit<IMoviesListProps, 'listType'>) {
  return (
    <Grid container component="ul" spacing={2} sx={{ listStyle: 'none' }}>
      {movies?.map((movie) => (
        <Grid item xs={6} sm={4} lg={3} key={movie.id} component="li">
          <GridMoviesListItem
            setSelectedMovieId={setSelectedMovieId}
            id={movie.id}
            img={movie.img}
            name={movie.name}
            year={movie.year}
          />
        </Grid>
      ))}
    </Grid>
  )
}
