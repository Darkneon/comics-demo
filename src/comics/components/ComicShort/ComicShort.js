import React from "react";

import PropTypes from "prop-types";
import Star from "../../../core/components/Star/Star";

const ComicShort = ({comic, isFavorited, onRemoveFavorite, onAddToFavorite}) => {
    const {title, price, published, cover} = comic;
    const handleClick = () => { !isFavorited ? onAddToFavorite(comic) : onRemoveFavorite(comic.key) };

    return (
        <div>
            <img data-testid='cover' src={cover} />
            <div data-testid='title'>{title}</div>
            <div data-testid='price'>{price} $</div>
            <div data-testid='published'>{published}</div>
            <Star onClick={handleClick} checked={isFavorited}>Add to </Star>
        </div>
    );
};

ComicShort.propTypes = {
    comic: PropTypes.object.isRequired,
};

export default ComicShort;