import React from 'react';
import MovieCard from './MovieCard';
import NotFound from '../common/NotFound';
import Loader from '../common/Loader';
import Pagination from '../common/Pagination';
import PropTypes from 'prop-types';

export default function MovieCardList({ movies, loading }) {
  return (
    <>
      <div className="card_list">
        {loading ? (
          <Loader />
        ) : movies.length ? (
          movies
            .filter(
              (movie) =>
                movie.poster_path && movie.release_date && movie.overview
            )
            .map((movie) => <MovieCard key={movie.id} {...movie} />)
        ) : (
          <NotFound />
        )}
      </div>
      <Pagination />
    </>
  );
}

MovieCardList.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
