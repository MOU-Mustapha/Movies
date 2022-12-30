import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../reducers/moviesReducer";
import reduxThunk from "redux-thunk";

const store = createStore(moviesReducer, applyMiddleware(reduxThunk));

export default store;
