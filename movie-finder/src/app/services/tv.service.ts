import { Injectable } from '@angular/core';
import { TvList } from '../models/tv-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { TvDetails } from '../models/tv-details';
import { MovieCredits } from '../models/movie-credits';
import { TvSeasons } from '../models/tv-seasons';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  search(query: string): Observable<TvList> {
    return this.http.get<TvList>(`${environment.apiUrl}/search/tv?${environment.apiKeyParam}&query=${query}&include_adult=false`);
  }

  constructor(private http: HttpClient) { }

  getPopularTvs(): Observable<TvList> {
    return this.http.get<TvList>(`${environment.apiUrl}/tv/popular?${environment.apiKeyParam}`);
  }
  
  getDetails(id: number): Observable<TvDetails> {
    return this.http.get<TvDetails>(`${environment.apiUrl}/tv/${id}?${environment.apiKeyParam}`);
  }
  
  getCredits(id: number): Observable<MovieCredits>{
    return this.http.get<MovieCredits>(`${environment.apiUrl}/tv/${id}/credits?${environment.apiKeyParam}`);
  }
  
  getSeasons(tvId: number, seasonNumber: number): Observable<TvSeasons>{
    return this.http.get<TvSeasons>(`${environment.apiUrl}/tv/${tvId}/season/${seasonNumber}?${environment.apiKeyParam}`);
  }
}
