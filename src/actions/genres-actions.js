import axios from "axios";
import {endpoints} from "../../config";
import { setMovieList } from "./movies-actions";

export const SET_GENRE_LIST = 'genres:set_genre_list';

export const setGenreList = (list) => ({
    type: SET_GENRE_LIST,
    list,
});

//thunk
export const requestGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => dispatch(setGenreList(res.data.genres)))
        .catch((error) => console.log(error));
};

export const requestGenreMovies = (genreId) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(genreId))
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};