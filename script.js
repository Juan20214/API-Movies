let api_key = 'efe4654bfc01f52ebdbf2fce5fc5c353'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500'

document.getElementById('searchButton').addEventListener('click', searchMovies)


let resultConteiner = document.getElementById('results')

function searchMovies() {
    resultConteiner, innerHTML = 'Cargando......'
    let searchInput = document.getElementById('searchInput').value
    resultConteiner.innerHTML = 'Cargando....'

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => displayMovie(response.results))



}


function displayMovie(movies) {

    resultConteiner.innerHTML = ''

    if (movies.lenght == 0) {
        resultConteiner.innerHTML = '<p>No se encontro ninguna pelicula </p>'
        return
    }

    movies.forEach(movie => {

        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h1')
        title.textContent = movie.title

        let releaseDate = document.createElement('h3')
        releaseDate.textContent = 'Fecha de Lanzamiento: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)


        resultConteiner.appendChild(movieDiv)

    });






}