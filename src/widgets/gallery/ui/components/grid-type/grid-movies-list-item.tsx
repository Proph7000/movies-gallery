import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

import { IMovie, useFavoriteMoviesStore } from '@entities/movie'

import { ButtonFavoriteStar } from '@shared/ui'

import { useAddToFavorite } from '../../../model'

interface IProps extends Pick<IMovie, 'id' | 'img' | 'name' | 'year'> {
  setSelectedMovieId: Dispatch<SetStateAction<number | null>>
}

export function GridMoviesListItem({
  setSelectedMovieId,
  id,
  img,
  name,
  year,
}: IProps) {
  const favoriteMovies = useFavoriteMoviesStore((s) => s.favoriteMovies)

  const handleClickAddToFavorite = useAddToFavorite()

  return (
    <Card
      sx={{ height: '100%', cursor: 'pointer' }}
      onClick={() => setSelectedMovieId(id)}
    >
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt={name}
        sx={{ objectFit: 'contain' }}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {year}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <ButtonFavoriteStar
            isFavorite={!favoriteMovies[id]?.status}
            onClick={(e) => handleClickAddToFavorite(e, id)}
          />
        </CardActions>
      </Stack>
    </Card>
  )
}
