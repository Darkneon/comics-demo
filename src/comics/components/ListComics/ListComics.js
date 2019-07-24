import React from "react";

import PropTypes from "prop-types";
import List from "../../../core/components/List/List";
import ComicShort from "../ComicShort/ComicShort";
import {Link} from "react-router-dom";

function isFavorite(comic={}, favorites={}) {
    return !!favorites[comic.key];
}

function comicRenderer(props) {
    return (item) => {
        return (
                <ComicShort comic={item}
                            toggleFavorite={props.toggleFavorite}
                            linkTo={`/comic/${item.id}`}
                            isFavorited={isFavorite(item, props.favorites)} />

        )
    }

}

const ListComics = ({comics, ...props}) => {
    return (
        <List items={comics} customRenderer={comicRenderer(props)} data-testid={'list-comics'} />
    );
};

ListComics.propTypes = {
    comics: PropTypes.array.isRequired,
    favorites: PropTypes.object.isRequired,
};

export default ListComics;