import { Injectable } from '@angular/core';
import { TvList } from '../models/tv-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { TvDetails } from '../models/tv-details';
import { Credits } from '../models/movie-credits';
import { TvSeason } from '../models/tv-seasons';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  constructor(private http: HttpClient) { }

  /**
   * Searches tv shows by the given keywords.
   * @param query The expression to search for
   * @returns An observable of the result of the search
   */
  search(query: string): Observable<TvList> {
    return this.http.get<TvList>(`${environment.apiUrl}/search/tv?${environment.apiKeyParam}&query=${query}&include_adult=false`);
  }

  /**
   * 
   * @returns An observable of the most popular tv shows
   */
  getPopularTvs(): Observable<TvList> {
    return this.http.get<TvList>(`${environment.apiUrl}/tv/popular?${environment.apiKeyParam}`);
  }
  
  /**
   * 
   * @param id The TMDB id of the tv show
   * @returns An observable of the tv show's details
   */
  getDetails(id: number): Observable<TvDetails> {
    return this.http.get<TvDetails>(`${environment.apiUrl}/tv/${id}?${environment.apiKeyParam}`);
  }
  
  /**
   * 
   * @param id The TMDB id of the tv show
   * @returns The credits of the tv show (example actors and their characters)
   */
  getCredits(id: number): Observable<Credits>{
    return this.http.get<Credits>(`${environment.apiUrl}/tv/${id}/credits?${environment.apiKeyParam}`);
  }
  
  /**
   * 
   * @param tvId The TMDB id of the tv show
   * @param seasonNumber The number of the season
   * @returns The details of the requested season
   */
  getSeasons(tvId: number, seasonNumber: number): Observable<TvSeason>{
    return this.http.get<TvSeason>(`${environment.apiUrl}/tv/${tvId}/season/${seasonNumber}?${environment.apiKeyParam}`);
  }
}
