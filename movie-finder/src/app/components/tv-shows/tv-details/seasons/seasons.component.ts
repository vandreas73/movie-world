import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TvDetails } from 'src/app/models/tv-details';
import { TvSeason } from 'src/app/models/tv-seasons';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent {
  @Input() tvDetails?: TvDetails;
}
