import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

export default function MovieCardList({movies}) {
 return (
  <div className="card_list">
     {  
        movies
        .filter(movie => movie.poster_path)
        .map(movie => <MovieCard key={movie.id} {...movie}/>)
     }
  </div>
 )
}

MovieCardList.propTypes = {
    movies: PropTypes.array.isRequired
}