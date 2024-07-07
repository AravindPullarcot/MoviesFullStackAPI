package dev.Aravind.MoviesAPI;

//import org.bson.types.ObjectId;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/v1/movies")//Endpoint when navigating localhost8088//api/v1/movies
public class MovieController extends CrossOrginExtender {
    @Autowired
    private MovieService movieService;
    private static final Logger LOGGER = Logger.getLogger(MovieController.class.getName());
    @GetMapping
    public ResponseEntity<List> getAllMovies(){

        //return "Poda Myre";
        //return new ResponseEntity<List>(movieService.allMovies(), HttpStatus.OK);//ResponseEntity is added to return 200 status
        List<Movies> movies = movieService.allMovies();
        LOGGER.info("Response for getAllMovies: " + movies);
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }
//    @GetMapping("/{imdb}")//http://localhost:8081/api/v1/movies/imdb?imdbId=tt3915174
//    public ResponseEntity<Optional<Movies>> getSingleMovieByImdbId(@RequestParam String imdbId) {
//        Optional<Movies> movie = movieService.SingleMovie(imdbId);
//        return new ResponseEntity<>(movie, HttpStatus.OK);
//    }
//    @GetMapping("/byId")
//    public ResponseEntity<Optional<Movies>> getSingleMovieById(@RequestParam String id) {
//        Optional<Movies> movie = movieService.SingleMovieById(id);
//        return new ResponseEntity<>(movie, HttpStatus.OK);
//    }
    @GetMapping("/imdb/{imdbId}")//We are locating a movie by using imdb value
    public ResponseEntity<Optional<Movies>> getSingleMovie(@PathVariable String imdbId){
//        Optional<Movies> movie = movieService.SingleMovie(imdbId);
//        return new ResponseEntity<>(movie, HttpStatus.OK);
        return  new ResponseEntity<Optional<Movies>>(movieService.SingleMovie(imdbId), HttpStatus.OK);
   }
//    @GetMapping("/{Id}")
//    public ResponseEntity<Optional<Movies>> getSingleMovieById(@PathVariable String Id){
//        ObjectId objectId = new ObjectId(Id);
//        Optional<Movies> movie = movieService.SingleMovieById(objectId);
//        return new ResponseEntity<>(movie, HttpStatus.OK);
//        //return new ResponseEntity<Optional<Movies>>(movieService.SingleMovieById(Id),HttpStatus.OK);
//    }

}

