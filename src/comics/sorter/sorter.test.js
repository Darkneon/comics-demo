import {sortBy, ASC, DESC} from './sorter';
import 'jest';



describe('sortBy', () => {
    it('return empty string then there are no fields or is null', () => {
        expect(sortBy([])).toBe('');
        expect(sortBy(null)).toBe('');
    });

    it('return an ASC field by default', () => {
        expect(sortBy([{name: 'title'}])).toBe('title');
    });

    it('return an DESC field', () => {
        expect(sortBy([{name: 'title', direction: DESC}])).toBe('-title');
    });

    it('return multiple fields seperated by ampersant', () => {
        expect(sortBy([
            {name: 'title1', direction: DESC},
            {name: 'title2', direction: ASC}
        ])).toBe('-title1&title2');
    });
});


