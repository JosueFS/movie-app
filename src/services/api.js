// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://api.punkapi.com/v2/',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

// export default {
//   getBeerList({ queryString, page = 1, perPage = 9 }) {
//     if (queryString) {
//       return api.get(
//         `/beers?beer_name=${queryString}&page=${page}&per_page=${perPage}`
//       );
//     } else {
//       return api.get(`/beers?page=${page}&per_page=${perPage}`);
//     }
//   },
// };
