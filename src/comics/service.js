import {loadActiveComicSuccess, loadComicsError, loadComicsSuccess} from "./actions";
import axios from 'axios';
import * as _ from 'lodash';
import {sortBy} from "./sorter/sorter";
import { setupCache } from 'axios-cache-adapter'
import {endPoint} from "../api";

// Create `axios-cache-adapter` instance
const cache = setupCache({
    maxAge: 5 * 60 * 1000
});

const instance = axios.create({
    adapter: cache.adapter
});

function transform(response) {


    const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
    const { results } = jsonResponse.data;

    const comics = results.map((comic, i) => {
        const {
            id,
            title,
            description='',
            prices=[],
            dates=[],
            creators=[],
            thumbnail
        } = comic;

        const printPrice = prices.find(price => price.type === 'printPrice');
        const onsaleDate = dates.find(date => date.type === 'onsaleDate');
        const creatorsList = creators.items.map(({name, role}) => ({name, role}));
        const creatorsByRole = _.groupBy(creatorsList, 'role');

        return {
            id,
            key: id,
            title,
            description,
            price: printPrice.price,
            published: onsaleDate.date,
            creators: creatorsByRole,
            cover: `${thumbnail.path}.${thumbnail.extension}`
        }
    });

    return comics;
}

export class ComicsService {
    constructor(httpClient=instance) {
        this.httpClient = httpClient;
    }

    loadComics(sort={}) {
        let sortString = sortBy([sort]);
        let orderBy = '';
        if (sortString) {
            orderBy = `&orderBy=${sortString}`;
        }

        const that = this;
        return async function(dispatch) {
            try {
                let response = await that.httpClient.get(API.comics + orderBy, {
                    cache: { maxAge: 5 * 60 * 1000, exclude: {  query: false } },
                    transformResponse: transform
                });
                return dispatch(loadComicsSuccess(response.data));
            } catch (e) {
                return dispatch(loadComicsError('error'));
            }
        };
    }

    loadComic(id) {
        const comicId = `&id=${id}`;

        const that = this;
        return async function(dispatch) {
            try {
                let response = await that.httpClient.get(API.comics + comicId, {
                    cache: { maxAge: 5 * 60 * 1000, exclude: {  query: false } },
                    transformResponse: transform
                });
                return dispatch(loadActiveComicSuccess(response.data[0]));
            } catch (e) {
               return dispatch(loadComicsError('error'));
            }
        };
    }
}



export const API = {
    comics: endPoint
};