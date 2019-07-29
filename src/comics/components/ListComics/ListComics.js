import React from "react";
import PropTypes from "prop-types";
import * as _ from "lodash";

import List from "core/components/List/List";
import ComicShort from "comics/components/ComicShort/ComicShort";

function isFavorite(comic = {}, favorites = {}) {
    return !!favorites[comic.key];
}

function comicRenderer(favorites, toggleFavorite) {
    return (item) => {
        return (
            <ComicShort comic={item}
                        linkTo={`/comic/${item.id}`}
                        isFavorited={isFavorite(item, favorites)}
                        toggleFavorite={toggleFavorite}
            />
        )
    }

}

const ListComics = ({comics, favorites = {}, toggleFavorite = _.noop}) => {
    return (
        <List items={comics}
              customRenderer={comicRenderer(favorites, toggleFavorite)}
              data-testid={'list-comics'}
        />
    );
};

ListComics.propTypes = {
    comics: PropTypes.array.isRequired,
    favorites: PropTypes.object,
    toggleFavorite: PropTypes.func

};

export default ListComics;