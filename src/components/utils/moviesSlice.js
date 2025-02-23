import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    showMovieDetail: null,
    movieCasteDetails: null,
    movieDetails: null,
    searchMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addShowMovieDetail: (state, action) => {
      state.showMovieDetail = action.payload;
    },
    addMovieCastDetails: (state, action) => {
      state.movieCasteDetails = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addClearCast: (state, action) => {
      state.movieCasteDetails = null;
    },
    addRemoveMovieDetails: (state, action) => {
      state.movieDetails = null;
      state.movieCasteDetails = null;
      state.trailerVideo = null;
      state.nowPlayingMovies = null;
      state.showMovieDetail = null;
    },
    addSearchMovie: (state, action) => {
      state.searchMovies = action.payload;
    },
    removeSearchMovies: (state) => {
      state.searchMovies = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
  addShowMovieDetail,
  addMovieCastDetails,
  addMovieDetails,
  addClearCast,
  addRemoveMovieDetails,
  addSearchMovie,
  removeSearchMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
