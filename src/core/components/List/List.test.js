import React from "react";
import 'jest';

import { render, cleanup } from '@testing-library/react';
import List from "./List";

afterEach(cleanup);

const fixtures = {
    items: [{
        key: 1,
        text: 'some text'
    }, {
        key: 2,
        text: 'some more text'
    }]
};

const listTestId = 'list';

describe('<List items={} />', () => {
    describe('empty items', () => {
        it('should have no children elements', () => {
            const { getByTestId } = render(<List items={[]} />);
            expect(getByTestId(listTestId).childNodes).toHaveLength(0);
        });
    });

    describe('non empty items', () => {
        it('should have no children elements', () => {
            const { getByTestId } = render(<List items={fixtures.items} />);
            expect(getByTestId(listTestId).childNodes).toHaveLength(fixtures.items.length);
        });
    });
});

describe('<List items={} customRenderer={} />', () => {
    describe('empty renderer', () => {
        it('should use a default renderer', () => {
            const { getByTestId } = render(<List items={fixtures.items} />);
            expect(getByTestId(listTestId).childNodes).toHaveLength(fixtures.items.length);
        });
    });

    describe('custom renderer', () => {
        const customText = (x) => `custom renderer: ${x}`;
        const customTestId = (x) => `custom-${x}`;
        const customRenderer = (item) => (
            <div data-testid={customTestId(item.key)}>
                {customText(item.key)}
            </div>
        );

        it('should call the custom renderer', () => {
            const { getByTestId } = render(<List items={fixtures.items} customRenderer={customRenderer}/>);

            const childNodes = getByTestId(listTestId).childNodes;
            expect(childNodes).toHaveLength(fixtures.items.length);

            fixtures.items.forEach(item => {
                const actualText = getByTestId(customTestId(item.key)).textContent;
                expect(actualText).toBe(customText(item.key));
            });
        });
    });
});
