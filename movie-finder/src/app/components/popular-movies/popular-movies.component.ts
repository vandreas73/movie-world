import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent {
  movieList: Observable<MovieList>;
  constructor(movieService: MovieService) {
    this.movieList = movieService.getPopular();
  }

}
