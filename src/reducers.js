import { combineReducers } from 'redux';
import { moviesReducer } from "./reducers/movies-reducer";
import { genresReducer } from "./reducers/genres-reducer";
import { heartsReducer } from "./reducers/hearts-reducer";
import { logsReducer } from "./reducers/logs-reducer";


export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  hearted: heartsReducer,
  logs: logsReducer,
});
