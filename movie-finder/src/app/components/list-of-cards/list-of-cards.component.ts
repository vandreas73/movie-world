import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';
import { ListCardElement } from '../list-card/list-card.component';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.scss']
})
export class ListOfCardsComponent {
  @Input() listObject: ListOfCardsObject | null | undefined;
}

export interface ListOfCardsObject {
  page: number;
  results: ListCardElement[];
  total_results: number;
  total_pages: number;
}