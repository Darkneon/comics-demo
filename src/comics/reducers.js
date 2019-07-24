import {CLOSE_MODAL, LOAD_ACTIVE_COMIC_SUCCESS, LOAD_COMICS_ERROR, LOAD_COMICS_SUCCESS, OPEN_MODAL} from "./actions";


const initialState = {
    comics: [],
    activeComic: {},
    inListIndex: -1,
    loaded: false,
    error: {},
    modal: false,
};

export const reducerComics = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_COMICS_SUCCESS: return {
            ...state,
            loaded: true,
            comics: [].concat(action.comics)
        };

        case LOAD_ACTIVE_COMIC_SUCCESS: return {
            ...state,
            activeComic: action.activeComic
        };

        case LOAD_COMICS_ERROR:   return {
            ...state,
            loaded: true,
            error: action.error
        };

        case CLOSE_MODAL:   return {
            ...state,
            modal: false
        };

        case OPEN_MODAL:   return {
            ...state,
            modal: true
        };

        default:
            return state;
    }
};
