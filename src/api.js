const key = '';
const hash = '';

if (!key || !hash) {
    alert('key or hash missing');
}

export const endPoint = `https://gateway.marvel.com/v1/public/comics?apikey=${key}&ts=mpcfilm&hash=${hash}`;
