import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { MoviesGenres } from "../types/moviesGenres";
import type { MoviesList } from "../types/moviesList";
import type { ApiResponseMini } from "../types/miniInfoTypes";

export const useMovies = defineStore("MovieItem", () => {
  const moviesData = ref<ApiResponseMini>();
  const moviesLoading = ref(false);
  const moviesError = ref(false);

  const moviesGenresData = ref<MoviesGenres>();
  const moviesGenresLoading = ref(false);
  const moviesGenresError = ref(false);

  const moviesListData = ref<MoviesList>();
  const moviesListLoading = ref(false);
  const moviesListError = ref(false);


  const currentGenre = ref("");
  const currentListItem = ref("");

  function getDataMovies<T extends ApiResponseMini>(payload: T) {
    moviesLoading.value = false;
    moviesData.value = payload;
  }

  function isLoadingMovies() {
    moviesLoading.value = true;
  }

  function isErrorMovies() {
    moviesError.value = true;
  }

  function getDataMoviesGenres<T extends MoviesGenres>(payload: T) {
    moviesGenresLoading.value = false;
    moviesGenresData.value = payload;
  }

  function isLoadingMoviesGenres() {
    moviesGenresLoading.value = true;
  }

  function isErrorMoviesGenres() {
    moviesGenresError.value = true;
  }

  function getDataMoviesList<T extends MoviesList>(payload: T) {
    moviesListLoading.value = false;
    moviesListData.value = payload;
  }

  function isLoadingMoviesList() {
    moviesListLoading.value = true;
  }

  function isErrorMoviesList() {
    moviesListError.value = true;
  }

  function setCurrentGenre(payload: string) {
    currentGenre.value = payload;
  }

  function setCurrentListItem(payload: string) {
    currentListItem.value = payload;
  }

  return {
    moviesData,
    moviesLoading,
    moviesError,
    getDataMovies,
    isLoadingMovies,
    isErrorMovies,
    moviesGenresData,
    moviesGenresLoading,
    moviesGenresError,
    getDataMoviesGenres,
    isLoadingMoviesGenres,
    isErrorMoviesGenres,
    moviesListData,
    moviesListLoading,
    moviesListError,
    getDataMoviesList,
    isLoadingMoviesList,
    isErrorMoviesList,
    currentGenre,
    currentListItem,
    setCurrentGenre,
    setCurrentListItem,
  };
});