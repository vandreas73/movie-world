import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './components/movies/popular-movies/popular-movies.component';
import { NavigationItems } from './navigation-items';
import { SearchMoviesComponent } from './components/movies/search-movies/search-movies.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { ActorDetailsComponent } from './components/actors/actor-details/actor-details.component';
import { PopularSeriesComponent } from './components/tv-shows/popular-series/popular-series.component';
import { SearchTvsComponent } from './components/tv-shows/search-tvs/search-tvs.component';
import { TvDetailsComponent } from './components/tv-shows/tv-details/tv-details.component';
import { HomeComponent } from './components/home/home.component';

/**
 * The routes of the app
 */
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: NavigationItems.popularMovies, component: PopularMoviesComponent },
  { path: NavigationItems.searchMovies, component: SearchMoviesComponent },
  { path: NavigationItems.movieDetails, component: MovieDetailsComponent },
  { path: NavigationItems.actorDetails, component:  ActorDetailsComponent},
  { path: NavigationItems.popularTvShows, component:  PopularSeriesComponent},
  { path: NavigationItems.searchTvs, component:  SearchTvsComponent},
  { path: NavigationItems.tvDetails, component:  TvDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
