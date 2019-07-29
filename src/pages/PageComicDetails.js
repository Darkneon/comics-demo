import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {withModal} from "core/components/Modal/Modal";
import {toggleFavorite} from "favorites/actions";
import ComicLong from "comics/components/ComicLong/ComicLong";
import history from "appHistory";
import {changeInListIndex, loadComic} from "comics/actions";

export class PageComicDetails extends React.Component {
    componentWillMount() {
        const { loadComic, comicId, activeComic } = this.props;

        if (Number(activeComic.id) !== Number(comicId)) {
            loadComic(comicId);
        }
    }

    componentDidUpdate(prevProps) {
        const { loadComic, comicId } = this.props;
        if (prevProps.comicId !== this.props.comicId) {
            loadComic(comicId);
        }
    }

    render() {
        const { activeComic, favorites, comics,toggleFavorite, changeInListIndex, comicsPerPage } = this.props;
        if (!activeComic.id || comics.length === 0) {
            return <div></div>;
        }

        const {prevIndex, nextIndex} = calculateNextPrevIndices(comics, activeComic, comicsPerPage);
        const prev = comics[prevIndex].id;
        const next = comics[nextIndex].id;

        return (
            <div>
                <ComicLong comic={activeComic}

                           onPrevClick={()=>{
                               changeInListIndex(prevIndex);
                               history.push('/comic/' + prev)
                           }}

                           onNextClick={()=>{
                               changeInListIndex(nextIndex);
                               history.push('/comic/' + next)
                           }}

                           isFavorited={!!favorites[activeComic.key]}
                           toggleFavorite={toggleFavorite} />
            </div>
        );
    }


}

function calculateNextPrevIndices(comics, activeComic, comicsPerPage) {
    let i = comics.findIndex(x => x.id === activeComic.id);


    let prevIndex = Math.max(-1, i-1);
    if (prevIndex === -1) {
        prevIndex = comicsPerPage - 1 || 0;
    }

    const nextIndex = i === -1 ?  0 : (i + 1) % comicsPerPage;
    return {prevIndex, nextIndex};

}
const mapStateToProps = state => ({
    inListIndex: state.reducerComics.inListIndex,
    activeComic: state.reducerComics.activeComic,
    comics: state.reducerComics.comics,
    comicsPerPage: state.reducerComics.comicsPerPage,
    favorites: state.reducerFavorites.favorites
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadComic: loadComic,
    toggleFavorite: toggleFavorite,
    changeInListIndex
}, dispatch);



export const withModalComicDetails = connect(mapStateToProps, mapDispatchToProps)(withModal(PageComicDetails));