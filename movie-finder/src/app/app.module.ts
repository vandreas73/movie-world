import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { PopularMoviesComponent } from './components/movies/popular-movies/popular-movies.component';
import { SearchMoviesComponent } from './components/movies/search-movies/search-movies.component';
import { SearchComponent } from './components/search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { ActorsListComponent } from './components/actors/actors-list/actors-list.component';
import { ActorDetailsComponent } from './components/actors/actor-details/actor-details.component';
import { ActorCreditsComponent } from './components/actors/actor-details/actor-credits/actor-credits.component';
import { RecommendedMoviesComponent } from './components/movies/movie-details/recommended-movies/recommended-movies.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { ListOfCardsComponent } from './components/list-of-cards/list-of-cards.component';
import { PopularSeriesComponent } from './components/tv-shows/popular-series/popular-series.component';
import { TvListComponent } from './components/tv-shows/tv-list/tv-list.component';
import { SearchTvsComponent } from './components/tv-shows/search-tvs/search-tvs.component';
import { TvDetailsComponent } from './components/tv-shows/tv-details/tv-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { SeasonsComponent } from './components/tv-shows/tv-details/seasons/seasons.component';
import { EpisodesComponent } from './components/tv-shows/tv-details/seasons/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavigationComponent,
    PopularMoviesComponent,
    SearchMoviesComponent,
    SearchComponent,
    MovieDetailsComponent,
    ActorsListComponent,
    ActorDetailsComponent,
    ActorCreditsComponent,
    RecommendedMoviesComponent,
    ListCardComponent,
    ListOfCardsComponent,
    PopularSeriesComponent,
    TvListComponent,
    SearchTvsComponent,
    TvDetailsComponent,
    SeasonsComponent,
    EpisodesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
