import { Injectable } from '@angular/core';
import { MovieList } from '../models/movie-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { MovieDetails } from '../models/movie-details';
import { MovieCredits } from '../models/movie-credits';

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

  getDetails(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${environment.apiUrl}/movie/${id}?${environment.apiKeyParam}`)
  }

  getCredits(id: number): Observable<MovieCredits> {
    return this.http.get<MovieCredits>(`${environment.apiUrl}/movie/${id}/credits?${environment.apiKeyParam}`)
  }
}
