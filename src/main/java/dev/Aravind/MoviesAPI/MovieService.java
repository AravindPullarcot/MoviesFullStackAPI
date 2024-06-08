package dev.Aravind.MoviesAPI;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    private static final Logger LOGGER=Logger.getLogger(MovieService.class.getName());//keylogger is used to find faults not shown in the webpage
//    public List<Movies> allMovies() {
//        List<Movies> movies = movieRepository.findAll();
//        LOGGER.info("All Movies: " + movies);
//        return movies;
//    }
    public List<Movies> allMovies(){
        List<Movies> movies = movieRepository.findAll();
        LOGGER.info("Retrieved all movies: " + movies);// logger used to display information in the terminal window
        return movies;

    }
    public Optional<Movies> SingleMovie(String imdbId){
        Optional<Movies> movie = movieRepository.findMovieByImdbId(imdbId);
        LOGGER.info("Retrieved movie by IMDB ID (" + imdbId + "): " + movie);
        return movie;
    }

    public Optional<Movies> SingleMovieById(ObjectId Id){

        return movieRepository.findById(Id);
       // ObjectId objectId = new ObjectId(Id);
        //Optional<Movies> movie = movieRepository.findById(objectId);
//        LOGGER.info("Movie by ID (" + Id + "): " + movie);
//        return movie;
    }
    //optional class is used when the return value can be null
}
