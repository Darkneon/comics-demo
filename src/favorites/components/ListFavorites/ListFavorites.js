import React from "react";

import PropTypes from "prop-types";
import List from "../../../core/components/List/List";

import {Link} from "react-router-dom";
import ComicShort from "../../../comics/components/ComicShort/ComicShort";


function favoriteRenderer(item) {
    return (<Link to={`/comic/${item.key}`}> <ComicShort {...item} /></Link>)
}

const ListFavorites = ({comics}) => {
    return (
        <>
            <h1 data-testid='header-favorites'>Favorites:</h1>
            <List items={comics} customRenderer={favoriteRenderer} data-testid={'list-favorites'} />
        </>
    );
};

ListFavorites.propTypes = {
    comics: PropTypes.array.isRequired,
};

export default ListFavorites;