import { Component, Input, OnInit } from '@angular/core';
import { ListOfCardsObject } from '../../list-of-cards/list-of-cards.component';
import { Observable } from 'rxjs';
import { TvList } from 'src/app/models/tv-list';
import { ListCardElement } from '../../card-element/card-elementcomponent';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.scss']
})
export class TvListComponent implements OnInit {
  /** The TV shows that you want to display */
  @Input() tvObservable?: Observable<TvList>;
  /** True: Write "Nothing to show" message if the list is empty. False: no such message */
  @Input() enableNothingToShow = true;
  /** The TV shows that you want to display */
  protected tvList?: TvList;
  /** Whether the loading animation is enabled */
  protected loading: boolean = false;

  ngOnInit(): void {
    this.refreshList();
    this.startLoading();
  }

  /**
   * Starts the loading animation if the movieObservable is truthy
   * @param force Yes: starts the animation always
   */
  startLoading(force = false) {
    if (force || this.tvObservable)
      this.loading = true;
  }

  /**
   * Refreshes the showed list
   */
  refreshList() {
    this.tvObservable?.subscribe(tvList => {
      this.tvList = tvList;
      this.loading = false;
    });
  }

  /**
   * 
   * @returns The object of the current movie to be handled to ListOfCardsComponent
   */
  protected getListObject(): ListOfCardsObject | null {
    let listObject = {} as ListOfCardsObject;
    listObject.page = this.tvList?.page || 0;
    listObject.total_pages = this.tvList?.page || 0;
    listObject.total_results = this.tvList?.total_results || 0;

    listObject.results = [];
    this.tvList?.results.forEach(tv => {
      listObject.results.push(new ListCardElement(
        tv.poster_path,
        tv.name,
        `/tv/${tv.id}`,
        `Original (${tv.original_language}): ${tv.original_name}`
      ))
    });

    return listObject;
  }
}
