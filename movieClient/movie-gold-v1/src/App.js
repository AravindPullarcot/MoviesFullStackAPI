import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/Trailer/trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [movies, setMovies]=  useState([]);
  const [movie, setMovie]= useState([null]);
  const [reviews, setReviews]= useState([]);

  const getMovies = async () =>{
    try
    {
      console.log("Attempting to fetch movies...");
      const response = await api.get(`http://localhost:8081/api/v1/movies`);//this is the api get request that would concatenated with the axios base url
      console.log("Response received", response.data);
      //console.log(response.data);
      setMovies(response.data);

    } 
    catch(err)
    {
      console.error("Error fetching movies:", err);
    }
  
  }
  const getMovieData = async (movieId) => {
    try {
      console.log(`Fetching data for movieId: ${movieId}`);
      const response = await api.get(`http://localhost:8081/api/v1/movies/imdb/${movieId}`);
      console.log('Response:', response);
  
      const singleMovie = response.data;
      console.log('Single Movie:', singleMovie);
  
      if (singleMovie) {
        setMovie(singleMovie);
        console.log('Movie reviews:', singleMovie.reviews);
        setReviews(singleMovie.reviews || []); // Ensure reviews are set to an empty array if not present
      } else {
        setMovie(null);
        setReviews([]);
      }
    } catch (error) {
      console.error('Error fetching single movie:', error);
      setMovie(null);
      setReviews([]);
    }
  };
  
  // const getMovieData = async (movieId) => 
  //   {
  //   try{
  //        const response= await api.get("http://localhost:8081/api/v1/movies/imdb/${movieId}");/*The movieId value is passed as the ImdbId value to the as a get request*/
  //        const singleMovie=response.data;
  //        setMovie(singleMovie);
  //        setReviews(singleMovie.reviews);
  //   }catch(error){
  //     console.error(error);

  //}
   //}
  
  
  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Header />

      {/* <h1>Welcome</h1> */}
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home movies={movies}/>}></Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>

      </Route>
    </Routes>
  
   
  </div>
  );

}

export default App;

// checking if we are able to hit the API
// fetch('http://localhost:8081/api/v1/movies')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('API Response:', data);
//   })
//   .catch(error => {
//     console.error('Error fetching API:', error);
//   });
