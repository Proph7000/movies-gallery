import { IMoviesListProps } from '../../model'
import { GridMoviesList } from './grid-type'
import { ListMoviesList } from './list-type'

export function MoviesList({
  movies,
  setSelectedMovieId,
  listType,
}: IMoviesListProps) {
  return (
    <>
      {listType === 'grid' ? (
        <GridMoviesList
          setSelectedMovieId={setSelectedMovieId}
          movies={movies}
        />
      ) : (
        <ListMoviesList
          setSelectedMovieId={setSelectedMovieId}
          movies={movies}
        />
      )}
    </>
  )
}
