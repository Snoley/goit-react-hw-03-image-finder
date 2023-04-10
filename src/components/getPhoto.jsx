const KEY_API = '33011289-df6702633a8228a46663ae887';
const BASE_URL = 'https://pixabay.com/api/';

export function getPhoto(searchText, page) {
  return fetch(`${BASE_URL}?key=${KEY_API}&q=${searchText}&page=${page}&per_page=12
`);
}