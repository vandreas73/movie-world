import { Injectable } from '@angular/core';
import { MovieList } from '../models/movie-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {

  }

  getPopular(): Observable<MovieList> {
    return this.http.get<MovieList>("https://api.themoviedb.org/3/movie/popular?api_key=cf95b2764f0a2a2893c8f23dc67da69a");
  }
}
