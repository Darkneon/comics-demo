export const LOAD_COMICS_SUCCESS = 'LOAD_COMICS_SUCCESS';
export const LOAD_ACTIVE_COMIC_SUCCESS = 'LOAD_COMIC_SUCCESS';
export const LOAD_COMICS_ERROR = 'LOAD_COMICS_ERROR';
export const OPEN_MODAL = 'OPEN_MODAL';
export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const CLOSE_MODAL = 'CLOSE_MODAL';


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

export const loadActiveComicSuccess = (data) => {
    return {
        type: LOAD_ACTIVE_COMIC_SUCCESS,
        activeComic: data
    }
};
