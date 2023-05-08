import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent {
  recommendedMovies?: Observable<MovieList>;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.recommendedMovies = this.movieService.getRecommendedMovies(params['id']);
    })
  }

}
