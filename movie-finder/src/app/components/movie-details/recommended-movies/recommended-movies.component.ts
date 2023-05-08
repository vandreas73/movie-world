import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent implements OnInit {
  recommendedMovies = {} as MovieList;
  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieService.getRecommendedMovies(params['id']).subscribe(recommendedMovies => {
        this.recommendedMovies = recommendedMovies;
        this.recommendedMovies.results = this.recommendedMovies.results.slice(0, 4);
      });
    })
  }

}
