import { Component } from '@angular/core';
import { Movie } from './MovieModel';
import { MoviePart } from './MovieModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    Movies: Array<Movie> = new Array<Movie>();

    constructor() {

    }
}
