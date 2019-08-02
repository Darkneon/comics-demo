import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Portal extends Component {
    constructor(props) {
        super(props);
        this.portalRootId = document.getElementById(props.portalRootId);
        this.el = document.createElement('div');
    }

    componentDidMount = () => {
        this.portalRootId.appendChild(this.el);
    };

    componentWillUnmount = () => {
        this.portalRootId.removeChild(this.el);
    };

    render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.el);
    }
}

export const withPortal = (WrappedComponent) => ({portalRootId, ...props}) => {
    return (
        <Portal portalRootId={portalRootId}>
            <WrappedComponent {...props} />
        </Portal>
    )
};