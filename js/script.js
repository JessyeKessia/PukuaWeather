const key = "c84f506d6196ba896b1d6e3a444ff1fa"
const cityElement = document.getElementById("city");
const countryElement = document.getElementById("country");
const tempElement = document.getElementById("temp");
const descriptionElement = document.getElementById("description");


function updatecity() {
    const inpute = document.querySelector(".input")
}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function updateWeather() {

    const cidade = "João Pessoa";
    const país = "BR";
    const temperatura = 25;
    const descrição = "Chuvoso";

    cityElement.textContent = cidade;
    countryElement.textContent = país;
    tempElement.textContent = temperatura;
    descriptionElement.textContent = descrição;
}

// Chama a função para atualizar os dados do tempo.
updateWeather();

setInterval(updateWeather, 6000);