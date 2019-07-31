import PropTypes from "prop-types";
import React from "react";
import './PrevNext.css';
import Icon from "../Icon/Icon";

const PrevNext = ({onPrevClick, onNextClick}) => {
    return (
        <div className='prev-next-container'>
            <Icon type='arrow-left' onClick={onPrevClick} className='arrow u-hoverable'/>
            <Icon type='arrow-right' onClick={onNextClick} className='arrow u-hoverable' />
        </div>
    )
};

PrevNext.propTypes = {
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired
};

export default PrevNext;