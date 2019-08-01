import React from 'react';
import './Modal.scss';
import Icon from "../Icon/Icon";

const ModalBackground = ({onClick}) => (
    <div className='modal-background' onClick={onClick}></div>
);

const ModalContent = ({children}) => (
    <div className='modal-content'>{children}</div>
);

export const Modal = ({ handleClose, children }) => {
    return (
        <>
            <div className="modal">
                <button className='modal-close-button' onClick={handleClose}>
                    <Icon type='close' />
                </button>
                <ModalContent>{children}</ModalContent>
                <ModalBackground onClick={handleClose}/>
            </div>
        </>
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