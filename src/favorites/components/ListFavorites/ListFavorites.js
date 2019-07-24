import React from "react";

import PropTypes from "prop-types";
import List from "../../../core/components/List/List";
import ComicShort from "../../../comics/components/ComicShort/ComicShort";
import * as _ from 'lodash';

const ListFavorites = ({comics, toggleFavorite}) => {
    const favoriteRenderer = (item) => (
        <ComicShort linkTo={`/comic/${item.key}`} comic={item} isFavorited={true} toggleFavorite={toggleFavorite}/>
    );

    return (
        <>
            <h1 data-testid='header-favorites'>Favorites:</h1>
            <List items={_.values(comics)} customRenderer={favoriteRenderer} data-testid={'list-favorites'} />
        </>
    );
};

ListFavorites.propTypes = {
    comics: PropTypes.object.isRequired,
};

export default ListFavorites;