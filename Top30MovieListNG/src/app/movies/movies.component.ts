import { Component, OnInit } from '@angular/core';
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

  Movies: Array<Movie> = new Array<Movie>();

  constructor(private moviesService: MoviesService) {

  }

  theProperty: string = "";
  theList: any[];

  ngOnInit() {
      console.log("Movies Component Constructed");
      this.theList = this.moviesService.movies;      
      this.theProperty = this.moviesService.theThing;
  }

}
