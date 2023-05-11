import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';
import { MovieListComponent } from '../../movie-list/movie-list.component';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent {
  /** The movies that you want to display */
  protected recommendedMovies?: Observable<MovieList>;
  /** The index that you want to show the cards from */
  protected showCardsFrom = 0;
  /** The count of the pages */
  protected allPagesCount = 1;
  
  @ViewChild(MovieListComponent)
  private movieListComponent?: MovieListComponent

  constructor(private movieService: MovieService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.recommendedMovies = this.movieService.getRecommendedMovies(params['id']);
      this.recommendedMovies.subscribe(movieList => {
        this.allPagesCount = movieList.results.length;
      });
    });
  }

  /**
   * Handles the next/previous page requests
   * @param pageEvent the data of the new page
   */
  protected pageChange(pageEvent: PageEvent) {
    this.showCardsFrom = pageEvent.pageIndex * 4;
    this.movieListComponent?.refreshList();
  }

}

export interface PageEvent{
  length: number
  pageIndex: number
  pageSize: number
  previousPageIndex?: number
}
