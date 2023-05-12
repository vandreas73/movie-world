import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  /** Emits if search is requested */
  @Output() newSearch = new EventEmitter<string>();
  @ViewChild('queryInput') private queryInput?: ElementRef;
  /** The typed value in the search input field */
  protected queryText: string = '';
  /** If given, the last MovieList value will be saved to local storage with this key */
  @Input() localStorageKey?: string;

  ngOnInit() {
    if (this.localStorageKey && localStorage[this.getLocalStroageKey()]) {
      this.queryText = localStorage[this.getLocalStroageKey()];
    }
  }

  /** Handles the search request */
  protected search(query: string): void {
    this.newSearch.emit(query);
    this.queryInput?.nativeElement.blur();
    if (this.localStorageKey)
      localStorage[this.getLocalStroageKey()] = query;
  }

  private getLocalStroageKey(): string {
    return `app-search-${this.localStorageKey}`;
  }
}

