import axios from 'axios';
const Url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0c193b53ee7c133d94c0c361379d7627&hash=942020c4320bb1d2fc09c16f831d6c46&limit=100';


async function fetchdata() {
  const data = await axios(`${Url}`);
  console.log(data.data.data.results);
  return data.data.data.results;
}
export default fetchdata;
