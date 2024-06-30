import { Stack } from '@mui/material'
import { useEffect, useState, Dispatch, SetStateAction } from 'react'

import { IMovie } from '@entities/movie'

import { MultipleSelectCheckmarks } from '@shared/ui'

import { TListType } from '../model'
import { ListTypeSwitcher } from './components'

interface IProps {
  setSelectedGenres: Dispatch<SetStateAction<string[]>>
  selectedGenres: string[]
  setListType: Dispatch<SetStateAction<TListType>>
  movies?: IMovie[]
  listType: TListType
}

export function MoviesListToolbar({
  selectedGenres,
  setSelectedGenres,
  setListType,
  movies,
  listType,
}: IProps) {
  const [genres, setGenres] = useState<Set<string>>(new Set())

  useEffect(() => {
    const genresCollection: Set<string> = new Set()

    movies?.forEach((movie) => {
      movie.genres.forEach((genre) => genresCollection.add(genre))
    })

    setGenres(genresCollection)
  }, [movies])

  return (
    <Stack direction="row" justifyContent="space-between" mb={4}>
      <MultipleSelectCheckmarks
        options={[...genres]}
        onChange={setSelectedGenres}
        currentOptions={selectedGenres}
        label="Genres"
        sx={{ minWidth: 300 }}
      />

      <ListTypeSwitcher listType={listType} setListType={setListType} />
    </Stack>
  )
}
