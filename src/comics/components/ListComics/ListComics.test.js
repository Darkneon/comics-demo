import React from "react";
import 'jest';

import {cleanup, render} from '@testing-library/react';
import ListComics from "./ListComics";
import {MemoryRouter} from 'react-router-dom';

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

const listTestId = 'list-comics';


describe('<ListComics comics={} />', () => {
    describe('comics', () => {
        it('should render a list of comics', () => {
            const {getByTestId} = render(
                <MemoryRouter>
                    <ListComics comics={comics} />
                </MemoryRouter>
            );

            expect(getByTestId(listTestId).childNodes).toHaveLength(comics.length);
        });
    });
});