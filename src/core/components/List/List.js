import React from "react";

import PropTypes from "prop-types";
import './List.css';

const defaultRenderer = (item) => {
    return <>{item.toString()}</>
};

const List = ({items=[], customRenderer, ...props}) => {
    const renderer = customRenderer || defaultRenderer;
    return (
        <ul data-testid='list' {...props} className="core-list">
            { renderItems(items, renderer) }
        </ul>
    );
};

function renderItems(items, renderer) {
    const all = Array.isArray(items) ? items.filter(Boolean): Object.values(items);
    return all.map(item => (
        <li key={item.key}>{renderer(item)}</li>
    ))
}

List.propTypes = {
    items: PropTypes.array.isRequired,
};

export default List;