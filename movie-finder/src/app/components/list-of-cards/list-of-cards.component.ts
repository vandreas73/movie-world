import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';
import { ListCardElement } from '../card-element/card-elementcomponent';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.scss']
})
export class ListOfCardsComponent {
  /** The list of chards that you want to display */
  @Input() listObject?: ListOfCardsObject | null;

  /** True: Write "Nothing to show" message if the list is empty. False: no such message */
  @Input() enableNothingToShow = true;
}

export interface ListOfCardsObject {
  page: number;
  results: ListCardElement[];
  total_results: number;
  total_pages: number;
}