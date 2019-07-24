import {comics} from "../fixtures/comics";
import {API} from "../../comics/service";

export class ComicsHttpClientFake {
    get(url) {
        switch (url) {
            case API.comics: {
                return new Promise((response, reject) => {
                    setTimeout(() => response({comics}), 1000);
                })
            }
            default: {
                console.error('unexpected:', url);
            }
        }
    }
}