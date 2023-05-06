import { Component, Input } from '@angular/core';
import { MovieListElement } from 'src/app/models/movie-list-element';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  
  @Input() movieElement: MovieListElement | undefined;
}
