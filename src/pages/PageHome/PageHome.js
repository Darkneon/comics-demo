import React from "react";
import ListComics from "../../comics/components/ListComics/ListComics";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ComicsService} from "../../comics/service";
import {ComicsHttpClientFake} from "../../tests/fakes/comicsHttpClient";
import {toggleFavorite} from "../../favorites/actions";
import SortField from "../../core/components/SortField/SortField";
import * as _ from 'lodash';
import {withRouter} from "react-router-dom";

const sortOptions = [
    {
        id: 'title',
        title: 'Title',
        key: 'field'
    },
    {
        id: 'onsaleDate',
        title: 'Published',
        key: 'field'
    }
];

export class PageHome extends React.Component {
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
        const { loadData, isLoaded } = this.props;

        loadData({name: field.id, direction: order.id});
    }
    render() {
        const { comics, isLoaded, favorites={}, toggleFavorite } = this.props;

        if (!isLoaded) {
            return (<h1>Loading</h1>);
        }

        return (
            <div>
                <SortField title={'Select field...'}  onChange={ this.reload.bind(this) } optionsList={sortOptions} />

                <ListComics comics={comics}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comics: state.reducerComics.comics,
    isLoaded: state.reducerComics.loaded,
    favorites: state.reducerFavorites.favorites
});

const fake = new ComicsHttpClientFake();
const service = new ComicsService();

const mapDispatchToProps = dispatch => bindActionCreators({
    loadData: service.loadComics.bind(service),
    toggleFavorite: toggleFavorite
}, dispatch);

export const withConnectHome = (props=mapStateToProps, actions=mapDispatchToProps) => {
    return withRouter(connect(props, actions)(PageHome));
};

export const withConnectPropsHome = (actions=mapDispatchToProps) => {
    return connect(mapStateToProps, actions)(PageHome);
};

