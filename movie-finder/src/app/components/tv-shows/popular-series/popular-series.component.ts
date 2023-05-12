import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TvList } from 'src/app/models/tv-list';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.scss']
})
export class PopularSeriesComponent {
  constructor(tvService: TvService) {
    this.tvListObservable = tvService.getPopularTvs();
  }

   /** The list that you want to display */
  tvListObservable: Observable<TvList>;
}
