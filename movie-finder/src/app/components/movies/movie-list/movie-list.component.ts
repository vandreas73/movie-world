import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';
import { ListOfCardsObject } from '../../list-of-cards/list-of-cards.component';
import { ListCardElement } from '../../list-card/list-card.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movieList: MovieList | null | undefined;

  getListObject(): ListOfCardsObject {
    let listObject = {} as ListOfCardsObject;
    listObject.page = this.movieList?.page || 0;
    listObject.total_pages = this.movieList?.page || 0;
    listObject.total_results = this.movieList?.total_results || 0;
    listObject.results = [];
    this.movieList?.results.forEach(movie => {
      listObject.results.push(new ListCardElement(
        movie.poster_path ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path : 'assets/movie_FILL0_wght400_GRAD0_opsz48.svg',
        movie.title,
        `/movie/${movie.id}`,
        `Original (${movie.original_language}): ${movie.original_title}`
      ))
    });

    return listObject;
  }
}
