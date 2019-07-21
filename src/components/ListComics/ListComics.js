import React from "react";

import PropTypes from "prop-types";
import List from "../core/List/List";
import ComicShort from "../ComicShort/ComicShort";


function comicRenderer(item) {
    return (<ComicShort {...item} />)
}

const ListComics = ({comics}) => {
    return (
        <List items={comics} customRenderer={comicRenderer} data-testid={'list-comics'} />
    );
};

ListComics.propTypes = {
    comics: PropTypes.array.isRequired,
};

export default ListComics;