import { Component, EventEmitter, Output } from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  value = '';

  @Output() newSearch = new EventEmitter<string>();

  search(query: string) {
    this.newSearch.emit(query);
  }
}

