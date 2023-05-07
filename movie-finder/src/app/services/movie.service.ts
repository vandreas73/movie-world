import { Injectable } from '@angular/core';
import { MovieList } from '../models/movie-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { MovieDetails } from '../models/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<MovieList> {
    return this.http.get<MovieList>(`${environment.apiUrl}/search/movie?${environment.apiKeyParam}&query=${query}&include_adult=false`);
  }

  getPopular(): Observable<MovieList> {
    return this.http.get<MovieList>(`${environment.apiUrl}/movie/popular?${environment.apiKeyParam}`);
  }

  getDetails(id: number) {
    return this.http.get<MovieDetails>(`${environment.apiUrl}/movie/${id}?${environment.apiKeyParam}`)
  }
}
