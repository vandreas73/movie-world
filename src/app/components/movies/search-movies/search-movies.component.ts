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
  /** True: Write "Nothing to show" message if the list is empty. False: no such message */
  protected enableNothingToShow = false;
  /** The list that you want to display */
  protected movieList?: Observable<MovieList>;

  constructor(private movieService: MovieService) { }


  /**
   * Handles the search
   * @param query The expression to search for
   */
  protected searchMovies(query: string): void {
    this.movieList = this.movieService.search(query);
    this.movieListComponent?.startLoading(true);
    this.enableNothingToShow = true;
    this.movieList.subscribe(_ => this.movieListComponent?.refreshList());
  }

}
