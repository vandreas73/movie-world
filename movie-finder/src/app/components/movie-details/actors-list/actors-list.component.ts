import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCredits } from 'src/app/models/movie-credits';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  credits = {} as MovieCredits;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params =>
      {
        this.movieService.getCredits(params['id']).subscribe(credits => this.credits = credits);

      })
  }
}
