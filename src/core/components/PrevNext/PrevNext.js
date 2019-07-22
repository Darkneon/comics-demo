import PropTypes from "prop-types";
import React from "react";
import './PrevNext.css';

const Arrow = ({onClick, children}) => (
    <div onClick={onClick} className='u-hoverable'>
        {children}
    </div>
);

const ArrowLeft = ({onClick}) => (<Arrow onClick={onClick}>&#8678;</Arrow>);
const ArrowRight = ({onClick}) => (<Arrow onClick={onClick}>&#8680;</Arrow>);

const PrevNext = ({onPrevClick, onNextClick}) => {
    return (
        <div className='prev-next-container'>
            <ArrowLeft onClick={onPrevClick} />
            <ArrowRight onClick={onNextClick} />
        </div>
    )
};

PrevNext.propTypes = {
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired
};

export default PrevNext;