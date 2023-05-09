import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TvDetails } from 'src/app/models/tv-details';
import { TvSeasons } from 'src/app/models/tv-seasons';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  @Input() tvDetails?: TvDetails;
}
