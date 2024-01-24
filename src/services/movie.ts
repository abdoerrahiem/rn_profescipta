import axios from 'axios';
import {RootDispatch} from '~store';
import {
  setGenres,
  setNowShowing,
  setNowShowingLoading,
  setPopular,
  setPopularLoading,
  setTopRated,
  setTopRatedLoading,
  setUpcoming,
  setUpcomingLoading,
} from '~store/movie';
import {BASE_URL, MOVIE_HEADER_AXIOS} from '~utils/constant';

export const getGenres = () => async (dispatch: RootDispatch) => {
  axios
    .get(`${BASE_URL}/genre/movie/list?language=id`, MOVIE_HEADER_AXIOS)
    .then(res => dispatch(setGenres(res.data.genres)));
};

export const getNowShowing =
  (page: number) => async (dispatch: RootDispatch) => {
    dispatch(setNowShowingLoading(true));
    dispatch(setNowShowing([]));

    axios
      .get(
        `${BASE_URL}/movie/now_playing?page=${page}&language=id`,
        MOVIE_HEADER_AXIOS,
      )
      .then(res => dispatch(setNowShowing(res.data.results)))
      .catch(err => console.log('err get now showing: ', err.response?.data))
      .finally(() => dispatch(setNowShowingLoading(false)));
  };

export const getPopular = (page: number) => async (dispatch: RootDispatch) => {
  dispatch(setPopularLoading(true));
  dispatch(setPopular([]));

  axios
    .get(
      `${BASE_URL}/movie/popular?page=${page}&language=id`,
      MOVIE_HEADER_AXIOS,
    )
    .then(res => dispatch(setPopular(res.data.results)))
    .catch(err => console.log('err get popular: ', err.response?.data))
    .finally(() => dispatch(setPopularLoading(false)));
};

export const getTopRated = (page: number) => async (dispatch: RootDispatch) => {
  dispatch(setTopRatedLoading(true));
  dispatch(setTopRated([]));

  axios
    .get(
      `${BASE_URL}/movie/top_rated?page=${page}&language=id`,
      MOVIE_HEADER_AXIOS,
    )
    .then(res => dispatch(setTopRated(res.data.results)))
    .catch(err => console.log('err get top rated: ', err.response?.data))
    .finally(() => dispatch(setTopRatedLoading(false)));
};

export const getUpcoming = (page: number) => async (dispatch: RootDispatch) => {
  dispatch(setUpcomingLoading(true));
  dispatch(setUpcoming([]));

  axios
    .get(
      `${BASE_URL}/movie/upcoming?page=${page}&language=id`,
      MOVIE_HEADER_AXIOS,
    )
    .then(res => dispatch(setUpcoming(res.data.results)))
    .catch(err => console.log('err get upcoming: ', err.response?.data))
    .finally(() => dispatch(setUpcomingLoading(false)));
};
