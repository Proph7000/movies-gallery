import { api } from '@shared/http-instance'

import { IMovie } from '../types'

export async function fetchMoviesListRequest() {
  const response = await api.get<IMovie[]>('/list')

  return response.data
}
