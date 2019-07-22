import React from "react";

import PropTypes from "prop-types";
import Star from "../../../core/components/Star/Star";

import './ComicShort.css';

const ComicShort = ({comic, isFavorited, onRemoveFavorite, onAddToFavorite}) => {
    const {title, price, published, cover='https://via.placeholder.com/150'} = comic;
    const handleClick = () => { !isFavorited ? onAddToFavorite(comic) : onRemoveFavorite(comic.key) };

    return (
        <div className="comic-short">
                <div className="comic-short-thumbnail">
                    <img data-testid='cover' src={cover} />
                </div>

                <div className="comic-short-content">
                    <div data-testid='title'>{title}</div>
                    <div data-testid='price'>{price} $</div>
                    <div data-testid='published'>{published}</div>
                    <Star onClick={handleClick} checked={isFavorited}>Add to </Star>
                </div>
        </div>
    );
};

ComicShort.propTypes = {
    comic: PropTypes.object.isRequired,
};

export default ComicShort;