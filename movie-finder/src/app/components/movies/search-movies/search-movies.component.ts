import { Component, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {
  @ViewChild(MovieListComponent)
  private movieListComponent?: MovieListComponent;

  constructor(private movieService: MovieService) { }

  movieList?: Observable<MovieList>;

  searchMovies(query: string) {
    this.movieListComponent?.startLoading();
    this.movieList = this.movieService.searchMovies(query);
    this.movieList.subscribe(_ => this.movieListComponent?.refreshList());
  }

}
