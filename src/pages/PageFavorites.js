import React from "react";
import {connect} from "react-redux";
import ListFavorites from "../favorites/components/ListFavorites/ListFavorites";
import {bindActionCreators} from "redux";
import {toggleFavorite} from "../favorites/actions";
import {withModal} from "../core/components/Modal/Modal";

export class PageFavorites extends React.Component {
    render() {
        const { favorites={}, toggleFavorite } = this.props;

        return (
            <div>
                <ListFavorites comics={favorites} toggleFavorite={toggleFavorite} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favorites: state.reducerFavorites.favorites,
    comics: state.reducerComics.comics
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleFavorite: toggleFavorite
}, dispatch);


export const withConnectFavorites = (props=mapStateToProps) => {
    return connect(props, mapDispatchToProps)(PageFavorites);
};


export const withModalFavorites =  connect(mapStateToProps, mapDispatchToProps)(withModal(PageFavorites));

