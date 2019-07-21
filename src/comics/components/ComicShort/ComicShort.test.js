import React from "react";
import { render, cleanup } from '@testing-library/react';
import ComicShort from "./ComicShort";

afterEach(cleanup);

describe('<ComicShort title={} price={} published={} cover={} />', () => {
    it('display', () => {
        const title = 'a title';
        const price = 29;
        const published = '2000-1-1T00:00:00';
        const cover = '/url';

        const { getByTestId, debug } = render(<ComicShort title={title} price={price} published={published} cover={cover}/>);
        debug();

        expect(getByTestId('title').textContent).toBe(title);
        expect(getByTestId('price').textContent).toBe( `${price} $`);
        expect(getByTestId('published').textContent).toBe(published);
        expect(getByTestId('cover').tagName).toBe('IMG');
        expect(getByTestId('cover').getAttribute('src')).toBe(cover);
    });
});

