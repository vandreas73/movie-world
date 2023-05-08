import { Component, Input } from '@angular/core';
import { MovieListElement } from 'src/app/models/movie-list-element';
import { ListCardElement } from '../../list-card/list-card.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  
  @Input() movieElement = {} as MovieListElement;

  getCardElement(): ListCardElement {
    return new ListCardElement(
      this.movieElement?.poster_path ? 'https://image.tmdb.org/t/p/w500/' + this.movieElement?.poster_path : 'assets/movie_FILL0_wght400_GRAD0_opsz48.svg',
      this.movieElement?.title,
      `/movie/${this.movieElement.id}`,
      `Original (${this.movieElement?.original_language}): ${this.movieElement?.original_title}`
    )
  }
}
