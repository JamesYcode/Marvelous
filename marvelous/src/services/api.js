import axios from 'axios';

const Url = 'http://gateway.marvel.com/v1/public/'
const hash = '942020c4320bb1d2fc09c16f831d6c46'
const apiKey = process.env.REACT_APP_API_KEY;

// const UrlTwo = 'https://gateway.marvel.com:443/v1/public/characters?';



async function fetchData(currentPage) {
  const data = await axios(`${Url}characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=100&offset=${currentPage}`);
  console.log(data.data.data.results);
  return data.data.data.results;
}


async function fetchName(name) {
  const dataName = await axios(`${Url}characters?name=${name}&ts=1&apikey=${apiKey}&hash=${hash}`);
  return dataName.data.data.results;
}

export { fetchData, fetchName };
