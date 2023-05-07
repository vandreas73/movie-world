import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { NavigationItems } from './navigation-items';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  { path: NavigationItems.popularMovies, component: PopularMoviesComponent },
  { path: NavigationItems.searchMovies, component: SearchMoviesComponent },
  { path: NavigationItems.movieDetails, component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
