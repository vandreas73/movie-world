import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';
import { ListOfCardsObject } from '../../list-of-cards/list-of-cards.component';
import { ListCardElement } from '../../card-element/card-elementcomponent';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  /** The observable of the movies to display */
  @Input() movieObservable?: Observable<MovieList>;
  /** The number of cards to show */
  @Input() cardCount?: number;
  /** The index of the first card to show */
  @Input() showCardsFrom: number = 0;
  /** True: Write "Nothing to show" message if the list is empty. False: no such message */
  @Input() enableNothingToShow = true;
  /** The list that you want to display */
  protected movieList?: MovieList;
  /** Whether the loading animation is enabled */
  protected loading: boolean = false;
  /** If given, the last MovieList value will be saved to local storage with this key */
  @Input() localStorageKey?: string;

  ngOnInit(): void {
    this.refreshList();
    this.startLoading();
  }

  /**
   * Starts the loading animation if the movieObservable is truthy
   * @param force Yes: starts the animation always
   */
  startLoading(force = false): void {
    if (force || this.movieObservable)
      this.loading = true;
  }

  /**
   * Refreshes the showed list
   */
  refreshList(): void {
    if (this.movieObservable) {
      this.movieObservable?.subscribe(movieList => {
        this.movieList = movieList;
        if (this.cardCount)
          this.movieList.results = movieList.results.slice(this.showCardsFrom, this.showCardsFrom + this.cardCount);
        this.loading = false;
        if (this.localStorageKey)
          localStorage[this.getLocalStroageKey()] = JSON.stringify(movieList);
      });
    } 
    else {
      if (this.localStorageKey && localStorage[this.getLocalStroageKey()])
        this.movieList = JSON.parse(localStorage[this.getLocalStroageKey()] ?? "");
    }
  }

  /**
   * 
   * @returns The object of the current movie to be handled to ListOfCardsComponent
   */
  protected getListObject(): ListOfCardsObject | null {
    let listObject = {} as ListOfCardsObject;
    listObject.page = this.movieList?.page || 0;
    listObject.total_pages = this.movieList?.page || 0;
    listObject.total_results = this.movieList?.total_results || 0;

    listObject.results = [];
    this.movieList?.results.forEach(movie => {
      listObject.results.push(new ListCardElement(
        movie.poster_path,
        movie.title,
        `/movie/${movie.id}`,
        `Original (${movie.original_language}): ${movie.original_title}`
      ))
    });

    return listObject;
  }

  private getLocalStroageKey(): string {
    return `app-movie-list-${this.localStorageKey}`;
  }
}
