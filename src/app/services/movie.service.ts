import { Injectable } from '@angular/core';
import { MovieList } from '../models/movie-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { MovieDetails } from '../models/movie-details';
import { Credits } from '../models/movie-credits';
import { Actor } from '../models/actor';
import { ActorCredits } from '../models/actor-credits';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  /**
   * Searches movies by the given keywords.
   * @param query The expression to search for
   * @returns An observable of the result of the search
   */
  search(query: string): Observable<MovieList> {
    return this.http.get<MovieList>(`${environment.apiUrl}/search/movie?${environment.apiKeyParam}&query=${query}&include_adult=false`);
  }

  /**
   * 
   * @returns An observable of the most popular movies
   */
  getPopular(): Observable<MovieList> {
    return this.http.get<MovieList>(`${environment.apiUrl}/movie/popular?${environment.apiKeyParam}`);
  }

  /**
   * 
   * @param id The TMDB id of the movie
   * @returns An observable of the movie's details
   */
  getDetails(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${environment.apiUrl}/movie/${id}?${environment.apiKeyParam}`)
  }

  /**
   * 
   * @param id The TMDB id of the movie
   * @returns The credits of the movie (example actors and their characters)
   */
  getCredits(id: number): Observable<Credits> {
    return this.http.get<Credits>(`${environment.apiUrl}/movie/${id}/credits?${environment.apiKeyParam}`)
  }

  /**
   * 
   * @param id The TMDB id of the actor
   * @returns The details about the actor
   */
  getActorDetails(id: number): Observable<Actor> {
    return this.http.get<Actor>(`${environment.apiUrl}/person/${id}?${environment.apiKeyParam}`)
  }
  
  /**
   * 
   * @param id The TMDB id of the actor
   * @returns The credits of the actor (example in which movies he acted)
   */
  getActorCredits(id: number): Observable<ActorCredits> {
    return this.http.get<ActorCredits>(`${environment.apiUrl}/person/${id}/combined_credits?${environment.apiKeyParam}`)
  }
  
  /**
   * Recommend movies to the given movie.
   * @param movieId The TMDB id of the movie
   * @returns Recommended movies
   */
  getRecommendedMovies(movieId: number): Observable<MovieList> {
    return this.http.get<MovieList>(`${environment.apiUrl}/movie/${movieId}/recommendations?${environment.apiKeyParam}`)
  }
}
