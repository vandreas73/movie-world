import { Injectable } from '@angular/core';
import { TvList } from '../models/tv-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http: HttpClient) { }

  getPopularTvs(): Observable<TvList> {
    return this.http.get<TvList>(`${environment.apiUrl}/tv/popular?${environment.apiKeyParam}`);
  }
}
