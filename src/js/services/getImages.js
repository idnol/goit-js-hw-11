import axios from 'axios';
const URL = 'https://pixabay.com/api/';

export async function getImages({key, q, image_type, orientation, safesearch}) {
  return await axios.get(`${URL}?key=${key}&q=${q}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`)
    .then(response => {
      return response.data.hits;
    })
    .catch(error => console.log(error))
}