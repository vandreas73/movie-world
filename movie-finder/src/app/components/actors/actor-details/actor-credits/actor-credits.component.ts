import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreditCast, ActorCredits } from 'src/app/models/actor-credits';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actor-credits',
  templateUrl: './actor-credits.component.html',
  styleUrls: ['./actor-credits.component.scss']
})
export class ActorCreditsComponent implements OnInit {
  /** The credits of the actor that you want to display */
  protected credits = {} as ActorCredits;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieService.getActorCredits(params['id']).subscribe(credits => this.credits = credits);
    })
  }

  /**
   * 
   * @param cast The object that you want to get the link of
   * @returns The relative link of the movie or series
   */
  protected getLink(cast: ActorCreditCast): string {
    switch(cast.media_type){
      case 'movie':
        return `/movie/${cast.id}`;
      case 'tv':
        return `/series/${cast.id}`;
      default:
        return '';

    }
  }
}
