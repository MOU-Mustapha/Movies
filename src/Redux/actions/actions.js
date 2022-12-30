import axios from "axios";
import { ALL, AllMoviesApi, PAGE, SEARCH, searchMovies } from "../types/types";

export const getAllMoviesAction = () => {
  return async (dispatch) => {
    const res = await axios.get(AllMoviesApi);
    dispatch({
      type: ALL,
      data: res.data.results,
      pages: 500,
    });
  };
};
export const getSearchAction = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=397b71f31600c47f90504a0ae2be54d2&language=ar&query=${word}`
    );
    dispatch({
      type: SEARCH,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getPageAction = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=397b71f31600c47f90504a0ae2be54d2&language=ar&page=${page}`
    );
    dispatch({
      type: PAGE,
      data: res.data.results,
      pages: 500,
    });
  };
};
