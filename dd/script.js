let api_key = '809ff32453a18276ba29c7353ed19250'
let urlBase = 'http://api.openweathermap.org/data/2.5/weather'


document.getElementById('botonBusqueda').addEventListener('click', () => {

    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)

    }

})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}&units=metric`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))

}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const traduccion = traducciones[descripcion] || descripcion;

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura actual es de: ${Math.floor(temperatura)}ºC`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La  descripcion meteorologica es: ${traduccion}`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es de: ${humedad}%`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo)
}

const traducciones = {
    "clear sky": "cielo despejado",
    "few clouds": "pocas nubes",
    "scattered clouds": "nubes dispersas",
    "broken clouds": "nubes rotas",
    "shower rain": "lluvia ligera",
    "rain": "lluvia",
    "thunderstorm": "tormenta",
    "snow": "nieve",
    "mist": "niebla",
};



