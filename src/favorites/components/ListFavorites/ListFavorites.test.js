import React from "react";
import 'jest';

import {MemoryRouter} from 'react-router-dom';
import {cleanup, render} from '@testing-library/react';
import ListFavorites from "./ListFavorites";

afterEach(cleanup);


const comics = [{
    key: 1,
    title: 'title 1',
    price: 1
}, {
    key: 2,
    title: 'title 2',
    price: 2,
}];

const listTestId = 'list-favorites';
const headerTestId = 'header-favorites';


describe('<ListFavorites comics={} />', () => {
    describe('comics', () => {
        it('should render a list of comics', () => {
            const {getByTestId} = render(
                <MemoryRouter>
                    <ListFavorites comics={comics} />
                </MemoryRouter>
            );

            expect(getByTestId(listTestId).childNodes).toHaveLength(comics.length);
        });
    });
});