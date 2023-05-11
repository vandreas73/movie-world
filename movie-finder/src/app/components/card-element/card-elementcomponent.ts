import { Component, Input } from '@angular/core';
import { MovieListElement } from 'src/app/models/movie-list-element';

@Component({
  selector: 'app-list-card',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent {
  /** The card element that you want to display */
  @Input() cardElement?: ListCardElement;
}

export class ListCardElement {
  constructor(public poster_path: string | null = null,
    public title: string,
    public url_path: string,
    public content_line1: string = '',
    public content_line2: string = '') {
  }
}