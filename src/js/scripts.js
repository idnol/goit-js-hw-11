import { getImages } from './services/getImages';
import { markup } from './markup/markup';

const query = {
  key: '39643681-3b933991cfb4e8a1d1c671a0b',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

document.querySelector('#search-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  query.q = this.querySelector('input[type="text"]').value;
  getImages(query)
    .then(result => {
      document.querySelector('.js-list').innerHTML = result.map(item => markup(item)).join('');
    })
    .catch(error => console.log(error))
})


