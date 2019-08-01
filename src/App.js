import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Route, Router} from "react-router-dom"

import "./App.scss";

import {withConnectHome} from "pages/PageHome";
import {closeModal, loadComic, openModal} from "comics/actions";

import FavoritesBar from "favorites/components/FavoritesBar/FavoritesBar";
import history from "appHistory";
import {withModal} from "./core/components/Modal/Modal";
import {withConnectPageFavorites} from "./pages/PageFavorites";
import {withConnectPageComicDetails} from "./pages/PageComicDetails";

function App(props) {
  return (
      <Router history={history}>
          <FavoritesBar linkTo={'/favorites'} />

          <Route path="/" component={RoutedHome(props)} />
          <Route path="/comic/:id" component={RoutedComicDetails(props)} />
          <Route path="/favorites" component={RoutedFavorites(props)} />
      </Router>
  );
}


function RoutedHome(props) {
    return ({match, location}) => {
        const Home = withConnectHome();

        if (location.pathname === '/') {
            props.closeModal();
        }

        return (<Home />)
    }
}

const RoutedFavorites = (props) => {
    return ({match, location}) => {
        const ModalFavoritesPage = withConnectPageFavorites(withModal);
        const { modal } = props;

        const closeModal = () => {
            history.push('/');
        };

        if (!modal && location.pathname.indexOf('/favorites') === 0) {
            props.openModal();
        }


        return (
            <ModalFavoritesPage comicId={match.params.id} isOpen={modal} onClose={closeModal}/>
        )
    };
};


const RoutedComicDetails = (props) => {
    return ({match, location}) => {
        const ModalComicDetailsPage = withConnectPageComicDetails(withModal);
        const { modal } = props;

        const closeModal = () => {
            history.push('/');
        };

        if (!modal && location.pathname.indexOf('/comic') === 0) {
            props.openModal();
        }


        return (
            <ModalComicDetailsPage comicId={match.params.id} isOpen={modal} onClose={closeModal}/>
        )
    };

};

const mapStateToProps = state => ({
    comics: state.reducerComics.comics,
    favorites: state.reducerFavorites.favorites,
    modal: state.reducerComics.modal,
    activeComic: state.reducerComics.activeComic
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadComic: loadComic,
    openModal,
    closeModal
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);
