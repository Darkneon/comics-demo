import {ASC, sortBy} from "./sorter/sorter";
import {API, ComicsService, instance, transform} from "./service";

export const LOAD_COMICS_SUCCESS = 'LOAD_COMICS_SUCCESS';
export const LOAD_ACTIVE_COMIC_SUCCESS = 'LOAD_COMIC_SUCCESS';
export const LOAD_COMICS_ERROR = 'LOAD_COMICS_ERROR';
export const OPEN_MODAL = 'OPEN_MODAL';
export const IN_LIST_INDEX_CHANGED = 'IN_LIST_INDEX_CHANGED';
export const SORTING_CHANGED = 'SORTING_CHANGED';
export const ACTIVE_PAGE_CHANGED = 'ACTIVE_PAGE_CHANGED';

export const CLOSE_MODAL = 'CLOSE_MODAL';

let service = new ComicsService();

export const setFakeService = (fake) => {
    service = fake;
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }
};

export const openModal = () => {
    return {
        type: OPEN_MODAL,
    }
};

export const changeActivePage = (activePage) => {
    return {
        type: ACTIVE_PAGE_CHANGED,
        activePage
    }
};

export const changeSorting = (option, direction) => {
    return {
        type: SORTING_CHANGED,
        option,
        direction
    }
};


export const changeInListIndex = (inListIndex) => {
    return {
        type: IN_LIST_INDEX_CHANGED,
        inListIndex
    }
};


export function loadComicsFrom(offset = 0) {
    let sortString = sortBy([{name: 'title', direction: ASC}]);
    let orderBy = '';
    if (sortString) {
        orderBy = `&orderBy=${sortString}`;
    }

    orderBy += `&offset=${offset}`;

    return async function (dispatch, getState) {

        const limit = `&limit=${getState().reducerComics.comicsPerPage}`;

        try {
            let response = await instance.get(API.comics + orderBy + limit, {
                cache: {maxAge: 5 * 60 * 1000, exclude: {query: false}},
                transformResponse: transform
            });

            return dispatch(loadComicsSuccess(response.data));
        } catch (e) {
            return dispatch(loadComicsError('error'));
        }
    };
}

export const loadComicsSuccess = (data) => {
    return {
        type: LOAD_COMICS_SUCCESS,
        comics: data.comics,
        totalComics: data.total
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

export const loadComic = (id) => {
    return async function (dispatch) {
        let response = await service.loadComic(id);
        return dispatch({
            type: LOAD_ACTIVE_COMIC_SUCCESS,
            activeComic: response.comics[0]
        });
    };
};

export const loadComics = () => {
    return async function (dispatch, getState) {
        const sort = {
            name: getState().reducerComics.selectedOption,
            direction: getState().reducerComics.selectedSort,
        };

        const limit = getState().reducerComics.comicsPerPage;

        try {
            let response = await service.loadComics(sort, limit);
            return dispatch({
                type: LOAD_COMICS_SUCCESS,
                comics: response.comics,
                totalComics: response.total
            });
        } catch (e) {
            return dispatch(loadComicsError('error'));
        }
    };
}

