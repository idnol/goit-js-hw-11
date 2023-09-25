import axios from 'axios';
const URL = 'https://pixabay.com/api/';

export async function getImages(params) {
  try {
    return await axios.get(URL, { params }).then(response => {
      return {hits: response.data.hits, total: response.data.totalHits};
    })
  } catch (e) {
    console.log(e)
  }
}