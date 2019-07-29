import React from "react";
import 'jest';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {cleanup, render, waitForElement} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {composeWithDevTools} from "redux-devtools-extension";

import {ComicsHttpClientFake} from "tests/fakes/comicsHttpClient";
import {withConnectHome} from "pages/PageHome";
import {ComicsService} from "comics/service";
import {reducerComics} from "comics/reducers";
import {reducerFavorites} from "favorites/reducers";

import {setFakeService} from "comics/actions";

const middleware = [thunk];

const rootReducer = combineReducers({reducerComics, reducerFavorites});
const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);

afterEach(cleanup);

describe('<Home />', () => {
    describe('Home', () => {
        const fakeClient = new ComicsHttpClientFake();
        fakeClient.get = jest.fn(fakeClient.get);

        const service = new ComicsService(fakeClient);
        setFakeService(service);

        it('should render a list of comics fetched from server', async () => {
            const Home = withConnectHome();
            const {getByTestId} = render(<Provider store={store}>
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