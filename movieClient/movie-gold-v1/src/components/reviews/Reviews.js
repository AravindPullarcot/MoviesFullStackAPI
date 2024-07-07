import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

   const revText = useRef();
   //const { movieId } = useParams()
    let params = useParams();/* to extra the movie id from the respective URL*/
   const movieId = params.movieId; //    /* movieid is actually the Imdb Id*/
   console.log("Movie ID issssssss ", movieId);
   console.log('Movie data:', movie);
   console.log('Poster URL:', movie?.poster);


    // useEffect(()=>{
    //     getMovieData(movieId);
    // },[movieId]);

    useEffect(() => {
        getMovieData(movieId);
        console.log('Movie ID:', movieId);
    }, [movieId]); // Log the movie ID whenever it changes


    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("http://localhost:8081/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

            const updatedReviews = [...reviews, {body:rev.value}];
    
            rev.value = "";
    
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        } 
        



    };
       
 

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
        <Col>
          {movie?.poster ? (
            <img src={movie.poster} alt={movie?.title ? `Poster for ${movie.title}` : 'Movie Poster'} />
          ) : (
            <div>No poster available</div>
          )}
        </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                reviews?.map((r, index) => ( // Change 3: Add key prop
                    <React.Fragment key={index}>
                    <Row>
                        <Col>{r.body}</Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr />
                        </Col>
                    </Row>
                    </React.Fragment>
                ))
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews;