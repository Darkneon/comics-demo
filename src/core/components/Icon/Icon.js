import React from "react";
import PropTypes from "prop-types";



const IconContainer = ({onClick, color, className, children, size}) => {
    return (
        <span
            className={className}
            style={{color, fontSize: size}}
            onClick={onClick}
            data-testid='icon'
        >
            {children}
        </span>
    );
};


const ArrowLeft = ({...props}) => (<IconContainer {...props}>&#8678;</IconContainer>);
const ArrowRight = ({...props}) => (<IconContainer {...props}>&#8680;</IconContainer>);
const Close = ({...props}) => (<IconContainer {...props}>&#9747;</IconContainer>);
const StarEmpty = ({...props}) => (<IconContainer {...props}>&#9734;</IconContainer>);
const StarFilled = ({...props}) => (<IconContainer {...props}>&#9733;</IconContainer>);

const Missing = () => (<IconContainer>Icon Type Missing</IconContainer>);

const icons = {
    'arrow-left': ArrowLeft,
    'arrow-right': ArrowRight,
    'close': Close,
    'star-empty': StarEmpty,
    'star-filled': StarFilled,
    'missing': Missing
};

const Icon = ({type , ...props}) => {
    type = type || 'missing';
    return icons[type](props);
};

Icon.propTypes = {
    type: PropTypes.string.isRequired
};

export default Icon;