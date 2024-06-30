import { Paper, Typography } from '@mui/material'
import { useMemo, useState } from 'react'

import { MoviesListToolbar } from '@features/gallery'
import { TListType } from '@features/gallery'

import { IMovie } from '@entities/movie'

import { MoviesList, MovieDetailsModal } from './components'

interface IProps {
  movies?: IMovie[]
}

export function MoviesGallery({ movies }: IProps) {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null)
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [listType, setListType] = useState<TListType>('grid')

  const filteredMovies = useMemo(
    () =>
      selectedGenres.length
        ? movies?.filter((movie) =>
            movie.genres.some((genre) => selectedGenres.includes(genre))
          )
        : movies,
    [movies, selectedGenres]
  )

  const handleCloseMovieDetailsModal = () => {
    setSelectedMovieId(null)
  }

  return (
    <Paper sx={{ padding: 2, borderRadius: 2 }}>
      <Typography variant="h3" mb={2}>
        Movies Gallery
      </Typography>

      <MoviesListToolbar
        setSelectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
        setListType={setListType}
        listType={listType}
        movies={movies}
      />

      <MoviesList
        setSelectedMovieId={setSelectedMovieId}
        movies={filteredMovies}
        listType={listType}
      />

      <MovieDetailsModal
        selectedMovieId={selectedMovieId}
        onClose={handleCloseMovieDetailsModal}
        movies={movies}
      />
    </Paper>
  )
}
