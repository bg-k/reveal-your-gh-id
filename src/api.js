let SEARCH_URL;
const findId = (login) => {
  SEARCH_URL = `https://api.github.com/search/users?q=${login}&per_page=1`
  return fetch(SEARCH_URL)
  .then(res => res.json())
  .then(data => data.items[0].id);
}

export default findId;
export {SEARCH_URL};