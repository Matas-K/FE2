import { combineReducers } from 'redux';
import { moviesReducer } from "./reducers/movies-reducer";
import { genresReducer } from "./reducers/genres-reducer";
import { heartsReducer } from "./reducers/hearts-reducer";


export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  hearted: heartsReducer,
});
