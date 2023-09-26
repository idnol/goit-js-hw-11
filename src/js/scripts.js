import { getImages } from './services/getImages';
import { markup } from './markup/markup';

const query = {
  key: '39643681-3b933991cfb4e8a1d1c671a0b',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
  page: 1
};

const load = document.querySelector('.js-load');

load.classList.add('display-none');

document.querySelector('#search-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  load.classList.add('display-none');
  if (document.querySelector('.pagenum h3')) {
    document.querySelector('.pagenum h3').remove();
  }
  query.page = 1;
  query.q = this.querySelector('input[type="text"]').value;
  try {
    const response = await getImages(query);
    document.querySelector('.js-list').innerHTML = response.hits.map(item => markup(item)).join('');
    const total = await response.total;
    if (+total > query.per_page) {
      load.classList.remove('display-none');
    } else if (+total > 0) {
      document.querySelector('.pagenum').insertAdjacentHTML('beforeend', '<h3>We\'re sorry, but you\'ve reached the end of search results.</h3>')
    } else {
      document.querySelector('.pagenum').insertAdjacentHTML('beforeend', '<h3>Sorry, there are no images matching your search query. Please try again.</h3>')
    }
  } catch (error) {
    console.log(error);
  }
})

load.addEventListener('click', async function() {
  query.page++;
  try {
    const response = await getImages(query);
    document.querySelector('.js-list').insertAdjacentHTML('beforeend', response.hits.map(item => markup(item)).join(''));
    const totalPages = Math.ceil(+response.total / +query.per_page);
    console.log(totalPages);
    console.log(query.page);
    if (totalPages === query.page) {
      load.classList.add('display-none');
      document.querySelector('.pagenum').insertAdjacentHTML('beforeend', '<h3>We\'re sorry, but you\'ve reached the end of search results.</h3>')
    }
  } catch (error) {
    console.log(error);
  }
})




