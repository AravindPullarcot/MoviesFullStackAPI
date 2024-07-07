import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link,useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Hero =({movies})=>{
  const navigate=useNavigate();
  function reviews(movie)
  {
    navigate(`/Reviews/${movie}`);
  }
  console.log('Movies:', movies);


    return(
        <div className='movie-carousel-container'>
      <Carousel>
        {movies?.map((movie) => {
          
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
              <div className='movie-card' style={{ '--img': `url(${movie.poster})` }}>
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie-buttons-container">
                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>{/* we are only taking the last 11 syllables of the utube url from the database */}
                        <div className="play-button-icon-container">
                            <FontAwesomeIcon className="play-button-icon" icon={faCirclePlay}/>
                        </div>
                    </Link>
                    <div className="movie-review-button-container">                    
                    <Link to={`/Reviews/${movie.imdbId}`}>{/* /*do not use link to and review function to accesss the imdbID*/}
                        <Button variant="info" onClick={()=> reviews(movie.imdbId)}>Reviews</Button>
                    </Link>

                    </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Hero;