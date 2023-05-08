import { Component, Input } from '@angular/core';
import { MovieListElement } from 'src/app/models/movie-list-element';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {

  @Input() cardElement: ListCardElement | undefined;
}

export class ListCardElement {
  constructor(public poster_path: string,
    public title: string,
    public url_path: string,
    public content_line1: string = '',
    public content_line2: string = '') {
  }
}