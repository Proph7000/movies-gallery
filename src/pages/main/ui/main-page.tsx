import { Container, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

import { FavoriteMovies } from '@widgets/favorite-movies'
import { MoviesGallery } from '@widgets/gallery'

import { IMovie, fetchMoviesListRequest } from '@entities/movie'

export function MainPage() {
  const [movies, setMovies] = useState<IMovie[]>()

  const handleGetMoviesList = async () => {
    const movies = await fetchMoviesListRequest()

    setMovies(movies)
  }

  useEffect(() => {
    handleGetMoviesList()
  }, [])

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <MoviesGallery movies={movies} />
        </Grid>

        <Grid item xs={12} md={4}>
          <FavoriteMovies movies={movies} />
        </Grid>
      </Grid>
    </Container>
  )
}
