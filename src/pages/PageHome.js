import React from "react";
import ListComics from "../comics/components/ListComics/ListComics";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleFavorite} from "../favorites/actions";
import SortField from "../core/components/SortField/SortField";
import * as _ from 'lodash';
import {withRouter} from "react-router-dom";
import Pagination from "../core/components/Pagination/Pagination";
import {changeActivePage, changeSorting, loadComics, loadComicsFrom} from "../comics/actions";
import Loading from "../core/components/Loading/Loading";

const sortOptions = [
    {
        id: 'title',
        title: 'Title',
        key: 'field',
        selected: true

    },
    {
        id: 'onsaleDate',
        title: 'Published',
        key: 'field'
    }
];

export class PageHome extends React.Component {
    constructor(props) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
    }

    componentWillMount() {
        const { loadData, isLoaded } = this.props;

        if (!isLoaded) {
            loadData();
        }
    }

    reload(id, key, field, order) {
        if (_.isEmpty(field)) {
            return;
        }

        const { loadData, changeSorting } = this.props;
        changeSorting(field.id, order.id);
        loadData({name: field.id, direction: order.id});
    }

    onPageChange(page=0) {
        const {loadComicsFrom, changeActivePage, comicsPerPage} = this.props;
        const offset = Math.max(0, page - 1) * comicsPerPage;
        changeActivePage(page);
        loadComicsFrom(offset);
    }

    render() {
        const { comics, isLoaded, favorites={}, activePage, totalComics, toggleFavorite ,comicsPerPage, selectedOption, selectedSort} = this.props;

        if (!isLoaded) {
            return (<Loading />);
        }

        return (
            <div>
                <SortField optionsList={sortOptions}
                           selectedOption={selectedOption}
                           selectedSort={selectedSort}
                           onChange={ this.reload.bind(this) }  />
                <ListComics comics={comics}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                />
                <Pagination onChange={this.onPageChange}
                            activePage={activePage}
                            totalItemCount={totalComics}
                            itemsCountPerPage={comicsPerPage} />
            </div>
        );
    }
}



const mapStateToProps = state => ({
        activePage: state.reducerComics.activePage,
    comics: state.reducerComics.comics,
    isLoaded: state.reducerComics.loaded,
    favorites: state.reducerFavorites.favorites,
    selectedOption: state.reducerComics.selectedOption,
    selectedSort: state.reducerComics.selectedSort,
    totalComics: state.reducerComics.totalComics,
    comicsPerPage: state.reducerComics.comicsPerPage
});


const mapDispatchToProps = dispatch => bindActionCreators({
    loadData: loadComics,
    toggleFavorite: toggleFavorite,
    loadComicsFrom: loadComicsFrom,
    changeSorting: changeSorting,
    changeActivePage: changeActivePage
}, dispatch);

export const withConnectHome = (props=mapStateToProps, actions=mapDispatchToProps) => {
    return withRouter(connect(props, actions)(PageHome));
};

