import { SET_MOVIE_LIST } from "../actions/movies-actions";

const initialMoviesState = {
    list: [],
};

export const moviesReducer = (state = initialMoviesState, action) => {
    switch (action.type) {
        case SET_MOVIE_LIST:
            return { ...state, list: action.list };

        default:
            return state;
    }
};