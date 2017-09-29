import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
          
    movies: any[];
    theThing: string = "";
    constructor() {
        console.log("Movies Service Constructed");
        this.movies = ["The Lord of the Rings", "The Matrix", "The Thin Red Line"];
        console.log(this.movies);
        this.theThing = "Foo";
    }

    getMovieList() {
        return this.movies;
    }

}
