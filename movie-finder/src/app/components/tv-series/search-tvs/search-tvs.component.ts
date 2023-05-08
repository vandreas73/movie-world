import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TvList } from 'src/app/models/tv-list';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-search-tvs',
  templateUrl: './search-tvs.component.html',
  styleUrls: ['./search-tvs.component.scss']
})
export class SearchTvsComponent {

  constructor(private tvService: TvService) { }

  tvListObservable = new Observable<TvList>();

  search(query: string) {
    this.tvListObservable = this.tvService.search(query);
  }
}
