import _ from 'lodash'

const startPublishedYear = 2000;

export const comics = _.times(10, (i) => ({
    key: i,
    price: i,
    coverImage: 'url',
    published: `${startPublishedYear + i}-1-1T00:00:00`,
    title: `comic ${i}`,
    creators: [
        { name: `creator ${i}A`, role: 'writer' },
        { name: `creator ${i}B`, role: 'penciler' },
        { name: `creator ${i}C`, role: 'colorist'}
    ]
}));


export const comicsDetails = comics.map(comic => {
    return {
        ...comic,
        description: 'Neque per quisque facilisis odio magna duis orci quisque sed, purus sapien varius integer auctor mi suspendisse ullamcorper commodo, fames leo curae rhoncus conubia vitae elit conubia egestas libero a mollis feugiat purus facilisis vel fringilla eleifend posuere semper euismod aenean.',

    }
});