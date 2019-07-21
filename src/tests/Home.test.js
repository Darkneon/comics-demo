import React from "react";
import 'jest';

import {cleanup, render, waitForElement} from '@testing-library/react';
import {applyMiddleware, bindActionCreators, createStore} from "redux";
import {ComicsHttpClientFake} from "./fakes/comicsHttpClient";
import {withConnectPropsHome} from "../pages/Home/Home";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {ComicsService} from "../comics/service";
import {reducerComics} from "../comics/ducks";
import {MemoryRouter} from 'react-router-dom';

const middleware = [thunk];
const store = createStore(reducerComics,  applyMiddleware(...middleware));

afterEach(cleanup);

describe('<Home />', () => {
    describe('Home', () => {
        const fakeClient = new ComicsHttpClientFake();
        fakeClient.get = jest.fn(fakeClient.get);

        const service = new ComicsService(fakeClient);

        const mapDispatchToProps = dispatch => bindActionCreators({
            loadData: service.loadComics.bind(service)
        }, dispatch);

        it('should render a list of comics fetched from server', async () => {
            const Home = withConnectPropsHome(mapDispatchToProps);
            const {getByTestId, debug} = render(<Provider store={store}>
                    <MemoryRouter>
                        <Home />
                    </MemoryRouter>,
                </Provider>
            );
            await waitForElement(() => getByTestId('list-comics'));
            expect(fakeClient.get).toHaveBeenCalled();
        });
    });
});