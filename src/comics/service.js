import axios from 'axios';
import * as _ from 'lodash';
import {sortBy} from "./sorter/sorter";
import {setupCache} from 'axios-cache-adapter'
import {endPoint} from "../api";

const cache = setupCache({
    maxAge: 5 * 60 * 1000
});

export const instance = axios.create({
    adapter: cache.adapter
});


export function transform(response) {
    const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
    const { total, results } = jsonResponse.data;


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

    return {comics, total};
}

export class ComicsService {
    constructor(httpClient=instance) {
        this.httpClient = httpClient;
    }

    async loadComics(sort={}, maxLimit) {
        let sortString = sortBy([sort]);


        let orderBy = '';
        if (sortString) {
            orderBy = `&orderBy=${sortString}`;
        }

        const limit = `&limit=${maxLimit}`;

        try {
            let response = await this.httpClient.get(API.comics + orderBy + limit, {
                cache: { maxAge: 5 * 60 * 1000, exclude: {  query: false } },
                transformResponse: transform
            });

            return  response.data;
        } catch (e) {
            return new Error(e);
        }
    }

    async loadComic(id) {
        const comicId = `&id=${id}`;

        try {
            let response = await this.httpClient.get(API.comics + comicId, {
                cache: { maxAge: 5 * 60 * 1000, exclude: {  query: false } },
                transformResponse: transform
            });
            return response.data;
        } catch (e) {
           return new Error(e);
        }
    };

}



export const API = {
    comics: endPoint
};