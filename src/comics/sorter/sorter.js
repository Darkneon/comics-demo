export const ASC = 0;
export const DESC = 1;

export function sortBy(fields) {
    if (!fields) {
        return '';
    }

    const sign = (name, direction=ASC) => direction === ASC ? name : `-${name}`;
    return fields.map(f => sign(f.name, f.direction))
                 .join('&');
}