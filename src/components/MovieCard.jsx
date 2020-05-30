import React from 'react';
import PropTypes from 'prop-types';
import config from '../config/config';

export default function MovieCard({ title, poster_path, release_date, vote_average, overview}) {
 console.log({title, poster_path, release_date, vote_average, overview});
 return (
  <div className="card_list--item">
      <h3 className="">{title}</h3>
      <img className="card_list--image" src={`${config.baseMovieUrl}/${poster_path}`} alt={title} />
      <p className=""><small>{release_date}</small></p>
      <p className=""><small>{vote_average}</small></p>
      <p className=""><small>{overview}</small></p>
  </div>
 )
}

MovieCard.propTypes = {
   title: PropTypes.string.isRequired,
   poster_path: PropTypes.string.isRequired,
   release_date: PropTypes.string.isRequired,
   vote_average: PropTypes.number.isRequired,
   overview: PropTypes.string.isRequired
}