import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import {
  Box,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useState, useEffect } from 'react'

import { IMovie, useFavoriteMoviesStore, GenreItem } from '@entities/movie'

import { ButtonFavoriteStar } from '@shared/ui'

interface IProps {
  selectedMovieId: number | null
  onClose: () => void
  movies?: IMovie[]
}

export function MovieDetailsModal({
  selectedMovieId,
  onClose,
  movies,
}: IProps) {
  const favoriteMovies = useFavoriteMoviesStore((s) => s.favoriteMovies)
  const setFavoriteMovies = useFavoriteMoviesStore((s) => s.setFavoriteMovies)
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {
    if (selectedMovieId) {
      setMovie(movies?.find((movie) => movie.id === selectedMovieId) || null)
    } else {
      setTimeout(setMovie, 300, null)
    }
  }, [selectedMovieId])

  const handleClickFavorite = () => {
    movie && setFavoriteMovies(movie.id, !favoriteMovies[movie.id]?.status)
  }

  return (
    <Dialog
      open={!!selectedMovieId}
      onClose={onClose}
      sx={{ '& .MuiPaper-root': { maxWidth: 900, position: 'relative' } }}
    >
      <DialogTitle>Movie details</DialogTitle>

      <DialogContent>
        <Stack direction="row" spacing={2} mb={2}>
          <CardMedia
            component="img"
            image={movie?.img}
            title={movie?.name}
            sx={{ height: 250, objectFit: 'contain', width: 'initial' }}
          />

          <Box>
            <Typography gutterBottom variant="h4" mb={2}>
              {movie?.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {movie?.description}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={5} alignItems="center" mb={2}>
          <ButtonFavoriteStar
            isFavorite={!!movie && !favoriteMovies[movie.id]?.status}
            onClick={handleClickFavorite}
          />

          <Typography variant="body2">{movie?.year}</Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} maxWidth={300}>
              {movie?.genres.map((genre) => (
                <Grid item xs={6} key={genre}>
                  <GenreItem genre={genre} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="body2" display="block" mb={1}>
              {`Directors: ${movie?.director}`}
            </Typography>

            <Typography variant="body2">
              {`Starring: ${movie?.starring.join(', ')}`}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ position: 'absolute', top: 8, right: 20 }}>
        <IconButton onClick={onClose}>
          <CloseRoundedIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  )
}
