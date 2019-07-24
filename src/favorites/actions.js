export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (comic) => {
    return {
        type: TOGGLE_FAVORITE,
        comic
    }
};
