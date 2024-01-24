import {createSlice} from '@reduxjs/toolkit';

export interface MovieDetails {
  adult: boolean;
  backdrop_path: boolean;
  budget: number;
  genres: {id: number; name: string}[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {english_name: string; name: string}[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: {
      cast_id: number;
      name: string;
      profile_path: string;
    }[];
  };
  videos: {
    results: {
      id: string;
      key: string;
      site: string;
    }[];
  };
  release_dates: {
    results: {
      release_dates: {
        certification: string;
      }[];
    }[];
  };
}

export interface MovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieGenreItem {
  id: number;
  name: string;
}

interface InitialState {
  genres: MovieGenreItem[];
  nowShowing: MovieItem[];
  nowShowingLoading: boolean;
  popular: MovieItem[];
  popularLoading: boolean;
  topRated: MovieItem[];
  topRatedLoading: boolean;
  upcoming: MovieItem[];
  upcomingLoading: boolean;
  movieDetails: MovieDetails | null;
  movieDetailsLoading: boolean;
}

const initialState: InitialState = {
  genres: [],
  nowShowing: [],
  nowShowingLoading: false,
  popular: [],
  popularLoading: false,
  topRated: [],
  topRatedLoading: false,
  upcoming: [],
  upcomingLoading: false,
  movieDetails: null,
  movieDetailsLoading: false,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setNowShowing: (state, action) => {
      state.nowShowing = action.payload;
    },
    setNowShowingLoading: (state, action) => {
      state.nowShowingLoading = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setPopularLoading: (state, action) => {
      state.popularLoading = action.payload;
    },
    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    setTopRatedLoading: (state, action) => {
      state.topRatedLoading = action.payload;
    },
    setUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    setUpcomingLoading: (state, action) => {
      state.upcomingLoading = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    setMovieDetailsLoading: (state, action) => {
      state.movieDetailsLoading = action.payload;
    },
  },
});

export default movieSlice.reducer;

export const {
  setGenres,
  setNowShowing,
  setNowShowingLoading,
  setPopular,
  setPopularLoading,
  setTopRated,
  setTopRatedLoading,
  setUpcoming,
  setUpcomingLoading,
  setMovieDetails,
  setMovieDetailsLoading,
} = movieSlice.actions;
