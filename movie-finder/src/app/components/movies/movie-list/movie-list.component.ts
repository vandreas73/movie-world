import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';
import { ListOfCardsObject } from '../../list-of-cards/list-of-cards.component';
import { ListCardElement } from '../../list-card/list-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movieObservable?: Observable<MovieList>;
  @Input() cardCount?: number;
  @Input() showCardsFrom: number = 0;
  movieList?: MovieList;

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.movieObservable?.subscribe(movieList => {
      this.movieList = movieList;
      if (this.cardCount)
        this.movieList.results = movieList.results.slice(this.showCardsFrom, this.showCardsFrom + this.cardCount);
    });
  }


  getListObject(): ListOfCardsObject | null {
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
}
