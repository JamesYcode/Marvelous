import axios from 'axios';

const Url = 'http://gateway.marvel.com/v1/public/'
const hash = '942020c4320bb1d2fc09c16f831d6c46'
const apiKey = '0c193b53ee7c133d94c0c361379d7627'


async function fetchData(currentPage) {
  const data = await axios(`${Url}characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=100&offset=${currentPage}`);
  console.log(data.data.data.results);
  return data.data.data.results;
}

export default fetchData;
