import { MovieListElement } from "./movie-list-element";

export interface MovieList {
    page: number;
    results: MovieListElement[];
    total_results: number;
    total_pages: number;
}