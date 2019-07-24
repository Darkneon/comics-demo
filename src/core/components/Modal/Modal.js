import React from 'react';
import './Modal.css';

export const Modal = ({ handleClose, children }) => {
    // Escape hatch to store the reference in the DOM.
    // To be used in the onClick listener to call handleClose if have not click on a child component
    let domSelfRef;

    const handleCloseIfOutside = (e) => {
        if (e.target === domSelfRef) {
            handleClose();
        }
    };

    return (
        <div className="modal" onClick={handleCloseIfOutside} ref={node => domSelfRef = node}>
            <button onClick={handleClose} className='modal-close-button'>&#9747;</button>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export const withModal = (WrappedComponent) => (props) => {
    const {isOpen, onClose} = props;

    if (!isOpen) {
        return null;
    }

    return (
        <Modal handleClose={onClose}>
            <WrappedComponent {...props} />
        </Modal>
    )
};