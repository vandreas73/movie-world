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
  /** True: Write "Nothing to show" message if the list is empty. False: no such message */
  enableNothingToShow = false;
  /** The list that you want to display */
  tvListObservable?: Observable<TvList>;

  constructor(private tvService: TvService) { }

  /**
   * Handles the search
   * @param query The expression to search for
   */
  search(query: string) {
    this.tvListComponent?.startLoading(true);
    this.tvListObservable = this.tvService.search(query);
    this.enableNothingToShow = true;
    this.tvListObservable.subscribe(_ => this.tvListComponent?.refreshList());
  }
}
