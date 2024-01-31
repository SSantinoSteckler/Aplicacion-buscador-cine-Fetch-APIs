//  apiKey = '1bad5297e6e4feef63877a8c640c5594';
//  urlBase = 'https://api.themoviedb.org/3/search/movie';
//  urlImg = 'https://image.tmdb.org/t/p/w200'

let apiKey = '1bad5297e6e4feef63877a8c640c5594';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w200';
let $resultDiv = document.getElementById('results');

const $searchButton = document.getElementById('searchButton');
$searchButton.addEventListener('click', searchMovie);

function searchMovie() {
  let $inputSearch = document.getElementById('searchInput').value;
  $resultDiv.textContent = '';

  fetch(`${urlBase}?api_key=${apiKey}&query=${$inputSearch}`)
    .then((Response) => Response.json())
    .then((Response) => indexMovie(Response.results));
}

function indexMovie(movies) {
  if (movies.length === 0) {
    $resultDiv.innerHTML = '<p>No se a encontrado la pelicula</p>';
  }
  movies.forEach((movie) => {
    let $newDiv = document.createElement('div');
    $newDiv.classList.add('movie');

    let $title = document.createElement('h2');
    $title.textContent = movie.title;

    let $overview = document.createElement('p');
    $overview.textContent = movie.overview;

    let $releaseDate = document.createElement('p');
    $releaseDate.textContent = movie.release_date;

    let $img = document.createElement('img');
    let $imgPath = urlImg + movie.poster_path;
    $img.src = $imgPath;

    $newDiv.appendChild($img);
    $newDiv.appendChild($title);
    $newDiv.appendChild($overview);
    $newDiv.appendChild($releaseDate);

    $resultDiv.appendChild($newDiv);
  });
}
