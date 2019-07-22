import React from "react";

import PropTypes from "prop-types";

const fontSize = '36px';


const StarGlyth = ({onClick, color='black', children}) => (<div onClick={onClick} style={{fontSize, color}}>{children}</div>);
const StarGlythChecked = (props) => (<StarGlyth color='gold' {...props}>&#9733;</StarGlyth>);
const StarGlythNormal = (props) => (<StarGlyth {...props}>&#9734;</StarGlyth>);

const Star = ({onClick, checked=false}) => {
    if (checked) {
        return (
            <StarGlythChecked onClick={onClick} />
        );
    }

    return (
        <StarGlythNormal onClick={onClick} />
    );
};


Star.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Star;