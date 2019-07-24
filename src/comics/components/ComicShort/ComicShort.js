import React from "react";


import PropTypes from "prop-types";
import Star from "../../../core/components/Star/Star";

import './ComicShort.css';
import '../../../App.css';
import {Link} from "react-router-dom";

const ComicShort = ({comic, linkTo, isFavorited, toggleFavorite}) => {
    const {title, price, published, cover='https://via.placeholder.com/150'} = comic;
    const withComicToggleFavorite = () => toggleFavorite(comic);

    return (
        <div className="comic-short">
                <div className="comic-short-thumbnail">
                    <Link to={linkTo}>
                        <img data-testid='cover' src={cover} />
                    </Link>
                </div>


                <div className="comic-short-content">
                    <Link to={linkTo}>
                        <div data-testid='title'>{title}</div>
                        <div data-testid='price'>{price} $</div>
                        <div data-testid='published'>{published}</div>
                    </Link>
                    <Star onClick={withComicToggleFavorite} checked={isFavorited} className='u-hoverable' />
                </div>
        </div>
    );
};

ComicShort.propTypes = {
    comic: PropTypes.object.isRequired,
};

export default ComicShort;