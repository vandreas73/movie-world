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

  @Output() newSearch = new EventEmitter<string>();
  @ViewChild('queryText') queryText?: ElementRef;

  search(query: string) {
    this.newSearch.emit(query);
    this.queryText?.nativeElement.blur();
  }
}

