import React from "react";
import {cleanup, render} from '@testing-library/react';
import ComicShort from "./ComicShort";
import {MemoryRouter} from "react-router-dom";

afterEach(cleanup);

describe('<ComicShort comic={} />', () => {
    it('display', () => {
        const comic = {
            title: 'a title',
            price: 29,
            published: '-',
            cover: '/url',
        };

        const { getByTestId } = render(
            <MemoryRouter>
                <ComicShort comic={comic} linkTo='#' />
            </MemoryRouter>
        );

        expect(getByTestId('title').textContent).toBe(comic.title);
        expect(getByTestId('price').textContent).toBe( `${comic.price} $`);
        expect(getByTestId('published').textContent).toBe(comic.published);
        expect(getByTestId('cover').tagName).toBe('IMG');
        expect(getByTestId('cover').getAttribute('src')).toBe(comic.cover);
    });
});

