/*

*/
export class Movie {
    SequenceNumber: number;
    MovieName: string;
    Notes: string;
    MovieParts: Array<MoviePart> = new Array<MoviePart>();
    IMDBUrl: string;
    IMDBPosterUrl: string;

    constructor() {

    }     
}
/*

*/
export class MoviePart {
    MovieName: string;
    Notes: string;
    IMDBUrl: string;
    IMDBPosterUrl: string;
}
