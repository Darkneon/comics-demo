export const LOAD_COMICS_SUCCESS = 'LOAD_COMICS_SUCCESS';
export const LOAD_COMICS_ERROR = 'LOAD_COMICS_ERROR';

const initialState = {
    comics: [],
    loaded: false,
    error: {}
};

export const reducerComics = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_COMICS_SUCCESS: return {
            ...state,
            loaded: true,
            comics: action.comics
        };

        case LOAD_COMICS_ERROR:   return {
            ...state,
            loaded: true,
            error: action.error
        };

        default:                  return state;
    }
};

export const loadComicsSuccess = (data) => {
    return {
        type: LOAD_COMICS_SUCCESS,
        comics: data
    }
};

export const loadComicsError = (number, message) => {
    return {
        type: LOAD_COMICS_ERROR,
        error: {
            number,
            message
        }
    }
};

