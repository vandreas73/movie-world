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
  enableNothingToShow = false;

  constructor(private tvService: TvService) { }

  tvListObservable?: Observable<TvList>;

  search(query: string) {
    this.tvListComponent?.startLoading(true);
    this.tvListObservable = this.tvService.search(query);
    this.enableNothingToShow = true;
    this.tvListObservable.subscribe(_ => this.tvListComponent?.refreshList());
  }
}
