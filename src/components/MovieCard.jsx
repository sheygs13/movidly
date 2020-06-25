import React from 'react';
import PropTypes from 'prop-types';
import config from '../config/config';
import {truncate} from '../utils/utils';


export default function MovieCard({ title, poster_path, release_date, vote_average, overview}) {
 return (
  <div className="card_list--item">
      <img className="card_list--image" src={`${config.baseImageUrl}/${poster_path}`} alt={title} />
      <h3 className="card_list--title item">{title}</h3>
      <p className="card_list--release_date item"><small>{release_date}</small></p>
      <p className="card_list--vote_average item"><small>{vote_average ? vote_average : 'No Ratings' }</small></p>
      <p className="card_list--overview item">
          <small>
              {overview.length > 100 ? truncate(overview) : overview }
         </small>
     </p>
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