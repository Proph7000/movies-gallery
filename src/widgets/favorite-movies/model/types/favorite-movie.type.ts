import { IMovie } from '@entities/movie'

export type TFavoriteMovie = IMovie & { order: number }
