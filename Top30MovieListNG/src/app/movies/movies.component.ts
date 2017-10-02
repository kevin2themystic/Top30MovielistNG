import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Movie } from './MovieModel';
import { MoviePart } from './MovieModel'; 
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {  

  constructor(private moviesService: MoviesService) {

  }                         
  movieList: Observable<any>;

  ngOnInit() {
      console.log("Movies Component Constructed");
      this.movieList = this.moviesService.getMovieList();
      console.log(this.movieList);
  }

}
