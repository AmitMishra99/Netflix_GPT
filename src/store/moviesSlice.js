import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailerMovie: null,
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addTrailerMovie,
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
