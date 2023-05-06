import { Injectable } from '@angular/core';
import { MovieList } from '../models/movie-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  searchMovies(query: string) {

  }

  async getPopular(): Promise<MovieList> {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=cf95b2764f0a2a2893c8f23dc67da69a';
    let response = await fetch(url,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });

    if (!response.ok)
      throw new Error(`Error! status: ${response.status}`);

    const result = (await response.json()) as MovieList;

    return result;

  }
}
