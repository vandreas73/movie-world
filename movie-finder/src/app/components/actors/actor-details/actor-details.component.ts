import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Actor } from 'src/app/models/actor';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {
  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }

    /** The data of the actor that you want to display */
  protected actor = {} as Actor;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieService.getActorDetails(params['id']).subscribe(actor => this.actor = actor);
    })
  }

  /**
   * 
   * @returns The link of the current actor's profile picture
   */
  getProfileImagePath() {
    return this.actor.profile_path ? 'https://image.tmdb.org/t/p/w500' + this.actor.profile_path : '/assets/movie_FILL0_wght400_GRAD0_opsz48.svg';
  }


}
