import publishedDate from './publishedDate';
import 'jest';
import { padStart } from 'lodash';


function makeDateString(day, month, year) {
    const pad = (x) => padStart(x, 2, '0');
    return `${year}-${pad(month)}-${pad(day)}T00:00:00-0500`;
}

describe('MMDD_YYY', () => {
    it('return the correct format and month name', () => {
        const day = 1;
        const year = 2029;
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        for (let i = 0; i < 12; i++) {
            const text = makeDateString(day, i + 1, year);
            expect(publishedDate(text)).toBe(`${months[i]} ${day}, ${year}`);
        }
    });

    it('return empty when date is invalid', () => {
        expect(publishedDate('invalid')).toBe('');
    });

    it('return custom value when specified and date is invalid', () => {
        expect(publishedDate('invalid', 'custom value1')).toBe('custom value1');
        expect(publishedDate('invalid', 'custom value2')).toBe('custom value2');
    });

    it('do not return custom value when specified and date is valid', () => {
        expect(publishedDate(makeDateString(1,1, 2000), 'custom value1')).toBe('Jan 1, 2000');
    });
});


