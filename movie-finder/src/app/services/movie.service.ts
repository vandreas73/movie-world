import { Injectable } from '@angular/core';
import { MovieList } from '../models/movie-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {

  }

  getPopular(): Observable<MovieList> {
    return this.http.get<MovieList>(`${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}`);
  }
}
