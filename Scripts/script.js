import axios from "./Libs/axios.js";

axios.get('https://api.giphy.com/v1/gifs/trending?api_key=uwQca8z4Gjk31dnur6rqqS6BjWTj3Ug5&limit=3')
  .then(function (response) {
    // handle success
    console.log(response);
    const container = document.getElementById('trending-gifs');
    container.innerHTML = ''
    let gifs = response.data.data;
    gifs.forEach(element => {
      const image = document.createElement('img');
      image.height = element.images.fixed_width.height;
      image.width = element.images.fixed_width.width;
      image.src = element.images.fixed_width.url;
      const card = document.createElement('div');
      card.className = 'trending-gif__card';
      card.appendChild(image);
      container.appendChild(card);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

const handleOnClick = () => {
  const searchValue = document.getElementById('search-input').value;
  window.location = './pages/search-result.html?searchString=' + searchValue;
}

document.getElementById('search-submit').addEventListener('click', handleOnClick)