import React, { useState } from 'react';

export const Modal = ({ handleClose, children }) => {
    return (
        <div>
            <button onClick={handleClose}>x</button>
            {children}
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