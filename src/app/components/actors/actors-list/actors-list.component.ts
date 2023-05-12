import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';
import { Cast, Credits } from 'src/app/models/movie-credits';
import { MovieService } from 'src/app/services/movie.service';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  /** The credits that you want to display */
  protected credits = {} as Credits;

  /** The type of the media. For movies: 'movie', for tv shows: 'tv' */
  @Input() mediaType: string = "movie";

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private tvService: TvService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let service;
      switch (this.mediaType) {
        case 'movie':
          service = this.movieService;
          break;
        case 'tv':
          service = this.tvService;
          break;
      }
      service?.getCredits(params['id']).subscribe(credits => {
        this.credits = credits;
        this.credits.cast = credits.cast.filter((obj: Cast) => obj.known_for_department === 'Acting');
      });
    })
  }
}
