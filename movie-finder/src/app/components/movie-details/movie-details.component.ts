import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/movie-details';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movie = {} as MovieDetails;

  constructor(
    movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      movieService.getDetails(params['id']).subscribe(movie => this.movie = movie);
    })
  }

  getBackdropUrl(): string {
    return 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path;
  }

  getGenres(): string {
    return this.movie.genres.map((genre: any) => genre.name).join(', ');
  }

  getProductionCompanies(): string {
    return this.movie.production_companies.map((company: any) => company.name).join(', ');
  }

  getProductionCountries(): string {
    return this.movie.production_countries.map((country: any) => country.name).join(', ');
  }

  // getTrailerUrl(): string {
  //   return 'https://www.youtube.com/watch?v=' + this.movie.videos.results[0].key;
  // }
}
