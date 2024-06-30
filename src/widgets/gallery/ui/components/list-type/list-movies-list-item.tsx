import { Card, CardActions, Stack, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

import { IMovie, useFavoriteMoviesStore, GenreItem } from '@entities/movie'

import { ButtonFavoriteStar } from '@shared/ui'

import { useAddToFavorite } from '../../../model'
import { ListCardMedia, ListCardContent, Description } from './styled'

interface IProps extends Omit<IMovie, 'director' | 'starring'> {
  setSelectedMovieId: Dispatch<SetStateAction<number | null>>
}

export function ListMoviesListItem({
  setSelectedMovieId,
  description,
  genres,
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
      <Stack spacing={2} direction="row" width="100%">
        <ListCardMedia component="img" image={img} alt={name} />

        <ListCardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={5}
            mb={1}
          >
            <Typography variant="body1" color="text.primary">
              {name}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {year}
            </Typography>
          </Stack>

          <Description variant="body1" color="text.secondary">
            {description}
          </Description>

          <Stack direction="row" flexWrap="wrap" gap={1.5} mt="auto">
            {genres.map((genre) => (
              <GenreItem genre={genre} key={genre} />
            ))}
          </Stack>
        </ListCardContent>

        <CardActions disableSpacing sx={{ alignSelf: 'flex-start' }}>
          <ButtonFavoriteStar
            isFavorite={!favoriteMovies[id]?.status}
            onClick={(e) => handleClickAddToFavorite(e, id)}
          />
        </CardActions>
      </Stack>
    </Card>
  )
}
