import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {
  constructor(private movieService: MovieService) {
  }

  movieList = new Observable<MovieList>();

  searchMovies(query: string) {
    this.movieList = this.movieService.searchMovies(query);
  }
}
