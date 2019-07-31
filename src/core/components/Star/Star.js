import React from "react";

import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const size = '36px';

const Star = ({onClick, checked=false, ...props}) => {
    if (checked) {
        return (<Icon type='star-filled' color='gold' size={size} onClick={onClick} {...props} />);
    }

    return (
        <Icon type='star-empty' color='#adadad' size={size} onClick={onClick} {...props} />
    );
};


Star.propTypes = {
    onClick: PropTypes.func.isRequired,
    checked: PropTypes.bool
};

export default Star;