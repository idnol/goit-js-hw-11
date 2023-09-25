export function markup({previewURL, largeImageURL, likes, views, comments, downloads, tags}) {
  return `
    <li class='item'>
      <div class='img'>
        <img src='${previewURL}' alt='${tags}' data-large='${largeImageURL}'>
      </div>
      <div class='info'>
        <div class='info-item'>
          <p class='head'>Likes</p>
          <p class='text'>${likes}</p>
        </div>
        <div class='info-item'>
          <p class='head'>Views</p>
          <p class='text'>${views}</p>
        </div>
        <div class='info-item'>
          <p class='head'>Comments</p>
          <p class='text'>${comments}</p>
        </div>
        <div class='info-item'>
          <p class='head'>Downloads</p>
          <p class='text'>${downloads}</p>
        </div>
      </div>
    </li>
  `
}