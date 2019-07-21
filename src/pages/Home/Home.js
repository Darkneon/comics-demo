import React from "react";
import ListComics from "../../comics/components/ListComics/ListComics";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { ComicsService }  from "../../comics/service";

export class Home extends React.Component {
    componentWillMount() {
        const { loadData, isLoaded } = this.props;

        if (!isLoaded) {
            loadData();
        }
    }

    render() {
        const { comics, isLoaded } = this.props;

        if (!isLoaded) {
            return (<h1>Loading</h1>);
        }

        return (
            <div>
                <h1>Home</h1>
                <ListComics comics={comics} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comics: state.comics,
    isLoaded: state.loaded
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadData: new ComicsService().loadComics
}, dispatch);

export const withConnectHome = (props=mapStateToProps, actions=mapDispatchToProps) => {
    return connect(props, actions)(Home);
};

export const withConnectPropsHome = (actions=mapDispatchToProps) => {
    return connect(mapStateToProps, actions)(Home);
};

