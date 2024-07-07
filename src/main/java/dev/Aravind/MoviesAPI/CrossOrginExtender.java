package dev.Aravind.MoviesAPI;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public abstract class CrossOrginExtender {
    // This class can contain common methods or configurations for all controllers, this required to hit the endpoint API from React
}
