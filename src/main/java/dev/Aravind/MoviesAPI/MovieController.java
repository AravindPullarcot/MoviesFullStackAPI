package dev.Aravind.MoviesAPI;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")//Endpoint when navigating localhost8088//api/v1/movies
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List> getAllMovies(){
        return new ResponseEntity<List>(movieService.allMovies(), HttpStatus.OK);//ResponseEntity is added to return 200 status
    }
    @GetMapping("/{imdbId}")//We are locating a movie by using imdb value
    public ResponseEntity<Optional<Movies>> getSingleMovie(@PathVariable String imdbId){
        return  new ResponseEntity<Optional<Movies>>(movieService.SingleMovie(imdbId), HttpStatus.OK);
    }

}

