import { Dispatch, SetStateAction } from 'react'

import { TListType } from '@features/gallery'

import { IMovie } from '@entities/movie'

export interface IMoviesListProps {
  movies?: IMovie[]
  setSelectedMovieId: Dispatch<SetStateAction<number | null>>
  listType: TListType
}
