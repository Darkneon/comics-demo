import { TOGGLE_FAVORITE } from './actions';

const initialState = {
    favorites: {},
    error: {}
};

export const reducerFavorites = (state = initialState, action) => {
    console.debug('action triggered: ', action);

    const { type } = action;
    switch(type) {
        case TOGGLE_FAVORITE: {
            const exists = !!state.favorites[action.comic.key];
            let favorites = Object.assign({}, state.favorites);
            if (!exists) {
                favorites[action.comic.key] = action.comic;
            } else {
                delete favorites[action.comic.key];
            }

            return {
                ...state,
                favorites
            };
        }

        default:
            return state;
        }
    };