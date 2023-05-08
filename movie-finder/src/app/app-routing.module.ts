import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './components/movies/popular-movies/popular-movies.component';
import { NavigationItems } from './navigation-items';
import { SearchMoviesComponent } from './components/movies/search-movies/search-movies.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { PopularSeriesComponent } from './components/tv-series/popular-series/popular-series.component';

const routes: Routes = [
  { path: NavigationItems.popularMovies, component: PopularMoviesComponent },
  { path: NavigationItems.searchMovies, component: SearchMoviesComponent },
  { path: NavigationItems.movieDetails, component: MovieDetailsComponent },
  { path: NavigationItems.actorDetails, component:  ActorDetailsComponent},
  { path: NavigationItems.popularTvSeries, component:  PopularSeriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
