import {loadComicsError, loadComicsSuccess} from "./ducks";
import axios from 'axios';

export class ComicsService {
    constructor(httpClient=axios) {
        this.httpClient = httpClient;
    }

    loadComics() {
        const that = this;
        return async function(dispatch) {
            try {
                let response = await that.httpClient.get(API.comics);
                return dispatch(loadComicsSuccess(response.comics));
            } catch (e) {
                return dispatch(loadComicsError('error'));
            }
        };
    }
}

export const API = {
    comics: '/comics'
};