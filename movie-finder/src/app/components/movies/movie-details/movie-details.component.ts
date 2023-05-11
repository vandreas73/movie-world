import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/movie-details';
import { MovieService } from 'src/app/services/movie.service';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  protected movie = {} as MovieDetails;

  constructor(
    movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      movieService.getDetails(params['id']).subscribe(movie => this.movie = movie);
    })
  }

  /**
   * 
   * @returns The url of the movie's poster
   */
  protected getPosterUrl(): string {
    return this.movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path : 'assets/movie_FILL0_wght400_GRAD0_opsz48.svg';
  }

  /**
   *  
   * @returns The string representation of the movie's genres
   */
  protected getGenres(): string {
    return this.movie.genres.map((genre: any) => genre.name).join(', ');
  }

  /**
   * 
   * @returns The string representation of the movie's companies
   */
  protected getProductionCompanies(): string {
    return this.movie.production_companies.map((company: any) => company.name).join(', ');
  }

  /**
   * 
   * @returns The string representation of the movie's production countries
   */
  protected getProductionCountries(): string {
    return this.movie.production_countries.map((country: any) => country.name).join(', ');
  }
}
