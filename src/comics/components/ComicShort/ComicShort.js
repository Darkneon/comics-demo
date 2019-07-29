import React from "react";


import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Star from "core/components/Star/Star";
import publishedDate from "comics/publishedDate/publishedDate";
import "./ComicShort.css";

const ComicShort = ({comic, linkTo, isFavorited, toggleFavorite}) => {
    const {title, price, published, cover='https://via.placeholder.com/150'} = comic;
    const withComicToggleFavorite = () => toggleFavorite(comic);

    return (
        <div className="comic-short">
                <div className="comic-short-thumbnail">
                    <Link to={linkTo}>
                        <img data-testid='cover' src={cover} alt='cover' />
                    </Link>
                </div>


                <div className="comic-short-content">
                    <div className="comic-short-favorite-container">
                        <Star onClick={withComicToggleFavorite} checked={isFavorited} className='u-hoverable' />
                    </div>
                    <Link to={linkTo}>
                        <div className='comic-short-content-title t-title' data-testid='title'>{title}</div>
                        <div className='comic-short-content-price t-tag' data-testid='price'>{price} $</div>
                        <div className='t-tag' data-testid='published'>{publishedDate(published, '-')}</div>
                    </Link>

                </div>
        </div>
    );
};

ComicShort.propTypes = {
    comic: PropTypes.object.isRequired,
};

export default ComicShort;