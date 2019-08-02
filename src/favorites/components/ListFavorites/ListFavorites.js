import React from "react";

import PropTypes from "prop-types";
import List from "core/components/List/List";
import ComicShort from "comics/components/ComicShort/ComicShort";
import * as _ from 'lodash';

const header = {
    fontVariant: 'all-petite-caps',
    textAlign: 'center',
    fontSize: '4rem',
    marginBottom: '50px'
};

const heart = {
    color: 'rgba(236, 64, 122, 0.8)',
    verticalAlign: 'baseline'
};

const ListFavorites = ({comics, toggleFavorite=_.noop}) => {
    const favoriteRenderer = (item) => (
        <ComicShort linkTo={`/comic/${item.key}`} comic={item} isFavorited={true} toggleFavorite={toggleFavorite}/>
    );

    return (
        <>
            <h1 style={header} data-testid='header-favorites'>Comics you love <span style={heart}>&#9829;</span> </h1>
            <List items={_.values(comics)} customRenderer={favoriteRenderer} data-testid={'list-favorites'} />
        </>
    );
};

ListFavorites.propTypes = {
    comics: PropTypes.object.isRequired,
    toggleFavorite: PropTypes.func,
};

export default ListFavorites;