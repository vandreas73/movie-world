import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TvList } from 'src/app/models/tv-list';
import { TvService } from 'src/app/services/tv.service';
import { TvListComponent } from '../tv-list/tv-list.component';

@Component({
  selector: 'app-search-tvs',
  templateUrl: './search-tvs.component.html',
  styleUrls: ['./search-tvs.component.scss']
})
export class SearchTvsComponent {
  @ViewChild(TvListComponent)
  private tvListComponent?: TvListComponent;

  constructor(private tvService: TvService) { }

  tvListObservable = new Observable<TvList>();

  search(query: string) {
    this.tvListObservable = this.tvService.search(query);
    this.tvListObservable.subscribe(_ => this.tvListComponent?.refreshList());
  }
}
