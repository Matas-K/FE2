export const ADD_MOVIE_HEART = 'movie:add_heart';
export const REMOVE_MOVIE_HEART = 'movie:remove_heart';

export const addMovieHeart = (id) => ({
    type: ADD_MOVIE_HEART,
    id,
});

export const removeMovieHeart = (id) => ({
    type: REMOVE_MOVIE_HEART,
    id,
});



