import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/movie-details';
import { TvDetails } from 'src/app/models/tv-details';
import { MovieService } from 'src/app/services/movie.service';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent {
  tv = {} as TvDetails;

  constructor(
    tvService: TvService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      tvService.getDetails(params['id']).subscribe(tv => this.tv = tv);
    })
  }

  getPosterUrl(): string {
    return this.tv.poster_path ? 'https://image.tmdb.org/t/p/w500' + this.tv.poster_path : 'assets/movie_FILL0_wght400_GRAD0_opsz48.svg';
  }

  getGenres(): string {
    return this.tv.genres.map((genre: any) => genre.name).join(', ');
  }

  getProductionCompanies(): string {
    return this.tv.production_companies.map((company: any) => company.name).join(', ');
  }

  getProductionCountries(): string {
    return this.tv.production_countries.map((country: any) => country.name).join(', ');
  }

  // getTrailerUrl(): string {
  //   return 'https://www.youtube.com/watch?v=' + this.movie.videos.results[0].key;
  // }
}
