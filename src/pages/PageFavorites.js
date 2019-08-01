import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ListFavorites from "favorites/components/ListFavorites/ListFavorites";
import {toggleFavorite} from "favorites/actions";

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

export const withConnectPageFavorites = (component) => {
    return connect(mapStateToProps, mapDispatchToProps)(component(PageFavorites));
};

