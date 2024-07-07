import React from 'react'
import Hero from '../hero/Hero';

const Home =({movies})=>{
    //console.log("Home component rendered")
    return(
        <Hero movies={movies}/>
    );
};
export default Home;