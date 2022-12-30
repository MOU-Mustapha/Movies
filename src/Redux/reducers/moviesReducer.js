import { ALL, PAGE, SEARCH } from "../types/types";

const initialState = { movies: [], pageCount: 0 };
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL:
      return { movies: action.data, pageCount: action.pages };
    case SEARCH:
      return { movies: action.data, pageCount: action.pages };
    case PAGE:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};
