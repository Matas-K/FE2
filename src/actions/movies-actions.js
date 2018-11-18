import axios from 'axios';
import { endpoints } from '../../config';

export const SET_MOVIE_LIST = 'movies:set_movie_list';

export const setMovieList = (list) => ({
  type: SET_MOVIE_LIST,
  list,
});

//thunk
export const getPopularMovies = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};
