import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService){

  }

  ngOnInit(): void {
    this.movieService.getPopular().then(movieList => this.movieList = movieList);
  }

  movieList = {} as MovieList;

}
