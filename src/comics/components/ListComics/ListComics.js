import React from "react";

import PropTypes from "prop-types";
import List from "../../../core/components/List/List";
import ComicShort from "../ComicShort/ComicShort";
import {Link} from "react-router-dom";


function comicRenderer(item) {
    return ( <Link to={`/comic/${item.key}`}> <ComicShort {...item} /></Link>)
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