import { Component, Input, OnInit } from '@angular/core';
import { TvSeasons } from 'src/app/models/tv-seasons';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  tvSeasons?: TvSeasons;
  @Input() tvId?: number;
  @Input() seasonNumber?: number;

  constructor(private tvService: TvService) { }

  ngOnInit() {
    this.tvService.getSeasons(this.tvId!, this.seasonNumber!).subscribe(tvSeasons => this.tvSeasons = tvSeasons);
  }
}
