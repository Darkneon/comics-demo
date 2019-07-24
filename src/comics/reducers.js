import {
    ACTIVE_PAGE_CHANGED,
    CLOSE_MODAL, IN_LIST_INDEX_CHANGED,
    LOAD_ACTIVE_COMIC_SUCCESS,
    LOAD_COMICS_ERROR,
    LOAD_COMICS_SUCCESS,
    OPEN_MODAL,
    SORTING_CHANGED
} from "./actions";


const initialState = {
    comics: [],
    activeComic: {},
    inListIndex: -1,
    loaded: false,
    error: {},
    modal: false,
    selectedOption: 'title',
    selectedSort: 0,
    activePage: 1,
    totalComics: 0,
    comicsPerPage: 7
};

export const reducerComics = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_PAGE_CHANGED:
            return {
                ...state,
                activePage: action.activePage
            };

        case SORTING_CHANGED:
            return {
                ...state,
                selectedOption: action.option,
                selectedSort: action.direction
            };

        case LOAD_COMICS_SUCCESS:
            return {
                ...state,
                loaded: true,
                totalComics: action.totalComics,
                comics: [].concat(action.comics)
            };

        case LOAD_ACTIVE_COMIC_SUCCESS:
            return {
                ...state,
                activeComic: action.activeComic
            };

        case LOAD_COMICS_ERROR:
            return {
                ...state,
                loaded: true,
                error: action.error
            };

        case CLOSE_MODAL:
            return {
                ...state,
                modal: false
            };

        case OPEN_MODAL:
            return {
                ...state,
                modal: true
            };

        case IN_LIST_INDEX_CHANGED: {
            return {
                ...state,
                inListIndex: action.inListIndex
            };
        }


        default:
            return state;
    }
};
