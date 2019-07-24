import React from "react";

import PropTypes from "prop-types";

const fontSize = '36px';


const StarGlyth = ({onClick, color='black', className, children}) => (
    <div onClick={onClick} style={{fontSize, color}} className={className}>
        {children}
    </div>
);

const StarGlythChecked = (props) => (<StarGlyth color='gold' {...props}>&#9733;</StarGlyth>);
const StarGlythNormal = (props) => (<StarGlyth {...props}>&#9734;</StarGlyth>);

const Star = ({onClick, checked=false, ...props}) => {
    if (checked) {
        return (
            <StarGlythChecked onClick={onClick} {...props} />
        );
    }

    return (
        <StarGlythNormal onClick={onClick} {...props}  />
    );
};


Star.propTypes = {
    onClick: PropTypes.func.isRequired,
    checked: PropTypes.bool
};

export default Star;