import React from "react";

import PropTypes from "prop-types";


const ComicShort = ({title, price, published, cover}) => {
    return (
        <div>
            <img data-testid='cover' src={cover} />
            <div data-testid='title'>{title}</div>
            <div data-testid='price'>{price} $</div>
            <div data-testid='published'>{published}</div>
        </div>
    );
};

ComicShort.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    published: PropTypes.string,
    cover: PropTypes.string
};

export default ComicShort;