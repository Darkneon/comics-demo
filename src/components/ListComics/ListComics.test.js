import React from "react";
import 'jest';

import {render, cleanup} from '@testing-library/react';
import ListComics from "./ListComics";

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
            const {getByTestId} = render(<ListComics comics={comics} />);
            expect(getByTestId(listTestId).childNodes).toHaveLength(comics.length);
        });
    });
});