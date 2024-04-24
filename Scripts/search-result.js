import axios from "./libs/axios.js";

const getSearchResults = (q) => {
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=uwQca8z4Gjk31dnur6rqqS6BjWTj3Ug5&q=' +'programming%20'+ q + '&limit=25')
        .then(function (response) {
            // handle success
            console.log(response);
            const container = document.getElementById('results-section__container');
            container.innerHTML = '';
            let gifs = response.data.data;
            gifs.forEach(element => {
                const image = document.createElement('img');
                image.height = element.images.fixed_width.height;
                image.width = element.images.fixed_width.width;
                image.src = element.images.fixed_width.url;
                const card = document.createElement('div');
                card.className = 'results-section__card';
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
}

const init = () => {
    let url_string = window.location;
    let url = new URL(url_string);
    let searchString = url.searchParams.get("searchString");
    document.getElementById('search-text').textContent = searchString;
    getSearchResults(searchString);
}

init();