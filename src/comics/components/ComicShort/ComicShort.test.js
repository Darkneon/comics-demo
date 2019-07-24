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
            published: '2000-1-1T00:00:00',
            cover: '/url'
        };

        const { getByTestId } = render(
            <MemoryRouter>
                <ComicShort comic={comic}/>
            </MemoryRouter>
        );

        expect(getByTestId('title').textContent).toBe(comic.title);
        expect(getByTestId('price').textContent).toBe( `${comic.price} $`);
        expect(getByTestId('published').textContent).toBe(comic.published);
        expect(getByTestId('cover').tagName).toBe('IMG');
        expect(getByTestId('cover').getAttribute('src')).toBe(comic.cover);
    });
});

