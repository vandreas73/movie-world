import { Component, Input, OnInit } from '@angular/core';
import { ListOfCardsObject } from '../../list-of-cards/list-of-cards.component';
import { Observable } from 'rxjs';
import { TvList } from 'src/app/models/tv-list';
import { ListCardElement } from '../../list-card/list-card.component';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class TvListComponent implements OnInit {
  @Input() tvObservable?: Observable<TvList>;
  tvList?: TvList;
  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.tvObservable?.subscribe(tvList => {
      this.tvList = tvList;
    });
  }


  getListObject(): ListOfCardsObject | null {
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