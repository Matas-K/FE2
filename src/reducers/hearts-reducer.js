import { ADD_MOVIE_HEART, REMOVE_MOVIE_HEART } from "../actions/hearts-actions";

const initialHeartsState = [];

export const heartsReducer = (state = initialHeartsState, action) => {
    switch (action.type) {
        case ADD_MOVIE_HEART:
            return [ ...state, action.id ];

        case REMOVE_MOVIE_HEART:
            return state.filter((currentId) => currentId !== action.id);

        default:
            return state;
    }
};