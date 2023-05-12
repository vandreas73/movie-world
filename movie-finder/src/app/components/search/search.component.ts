import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  /** Emits if search is requested */
  @Output() newSearch = new EventEmitter<string>();
  @ViewChild('queryText') private queryText?: ElementRef;

  /** Handles the search request */
  protected search(query: string): void {
    this.newSearch.emit(query);
    this.queryText?.nativeElement.blur();
  }
}

