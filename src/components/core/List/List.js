import React from "react";

import PropTypes from "prop-types";

const defaultRenderer = (item) => {
    return <>{item.toString()}</>
};

const List = ({items, customRenderer, ...props}) => {
    const renderer = customRenderer || defaultRenderer;
    return (
        <ul data-testid='list' {...props}>
            {
                items.map(item => (
                    <li key={item.key}>{renderer(item)}</li>
                ))
            }
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.array.isRequired,
};

export default List;