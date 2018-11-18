import { SET_GENRE_LIST } from "../actions/genres-actions";

const initialGenresState = {
    list: [],
};

export const genresReducer = (state = initialGenresState, action) => {
    switch (action.type) {
        case SET_GENRE_LIST:
            return { ...state, list: action.list };

        default:
            return state;
    }
};