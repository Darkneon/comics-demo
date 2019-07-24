import React from "react";
import {withModal} from "../../core/components/Modal/Modal";
import {ComicsHttpClientFake} from "../../tests/fakes/comicsHttpClient";
import {ComicsService} from "../../comics/service";
import {toggleFavorite} from "../../favorites/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ComicLong from "../../comics/components/ComicLong/ComicLong";

export class PageComicDetails extends React.Component {
    componentWillMount() {
        const { loadComic, comicId, activeComic } = this.props;

        if (Number(activeComic.id) !== Number(comicId)) {
            loadComic(comicId);
        }
    }

    render() {
        const { activeComic, favorites, comics,toggleFavorite } = this.props;
        if (!activeComic.id || comics.length === 0) {
            return <div></div>;
        }

        return (
            <div>
                <ComicLong comic={activeComic}
                           isFavorited={!!favorites[activeComic.key]}
                           toggleFavorite={toggleFavorite} />
            </div>
        );
    }


}

const mapStateToProps = state => ({
        inListIndex: state.reducerComics.inListIndex,
    activeComic: state.reducerComics.activeComic,
    comics: state.reducerComics.comics,
    favorites: state.reducerFavorites.favorites
});

const fake = new ComicsHttpClientFake();
const service = new ComicsService();

const mapDispatchToProps = dispatch => bindActionCreators({
    loadComic: service.loadComic.bind(service),
    toggleFavorite: toggleFavorite,
}, dispatch);



export const withModalComicDetails = connect(mapStateToProps, mapDispatchToProps)(withModal(PageComicDetails));