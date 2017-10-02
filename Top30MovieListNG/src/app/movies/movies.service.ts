import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Movie } from './MovieModel';
import { MoviePart } from './MovieModel'; 
import { Observable } from "rxjs/Observable";

@Injectable()
export class MoviesService {

    private moviesUrl = '../data/movies.json';

    private headers = new Headers({ 'Accept': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });      

    constructor(private http: Http) {
        console.log("Movies Service Constructed");

    }

    getMovieList(): Observable<any> {
        console.log("MoviesService.getMovieList() called");
        return this.http.get(this.moviesUrl, this.options).map(m => m);
    }

}
