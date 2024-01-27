// Variáveis
const key = "c84f506d6196ba896b1d6e3a444ff1fa"
const key2 = "ced1ef772a9a46ba85d184129242701"
const cityElement = document.getElementById("city")
const countryElement = document.getElementById("country");
const tempElement = document.getElementById("temp");
const iconElement = document.getElementById("icon");
const searchElement = document.getElementById("search")
const HumidityElement = document.getElementById("humidity");
const WindElement = document.getElementById("wind");
const cityinput = document.getElementById("input");

// Função localização
async function getData(lat, long) {
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key2}&q=${lat}, ${long}&aqi=yes`);
    return await data.json();
};
async function gotLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);
    updatedata(result.location.name);
};
function failedToGet () {
    console.log("There was some issue")
};

window.onload = () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
};

// Funções Weather
// função para pegar a cidade
function updatecity() {;
    // pega o valor que está no input, a cidade digitada no caso e manda para a função de pegar os dados 
    updatedata(cityinput.value);
};

// Função para pegar as informações na API
// esse async serve para indicar que vai acessar um servidor, deixando a função mais rápida.
async function updatedata(city) {
    // o await serve como um ponto de espera, ou seja, tá mandando esperar o servidor responder. 
    // função fetch serve fazer uma requisição pra o servidor.
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then
    (response => response.json())
    // acessa o servidor, pega a resposta com o "then" e passa para o formato json. Salva tudo na constante data
    updateWeather(data)
};
function updateWeather(data) {
    console.log(data)

    if (data.cod === "404") {
        alert('Cidade não encontrada')
        return;
    }
    
    else {
        const cidade = data.name;
        const pais = data.sys.country;
        const temperatura = data.main.temp;
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        
        cityElement.innerHTML = cidade;
        countryElement.innerHTML = pais;
        tempElement.innerHTML = Math.floor(temperatura);
        iconElement.src = `images/${icon}.png`;
        HumidityElement.innerHTML = `${humidity}%`;
        WindElement.innerHTML = `${wind} km/h`;
    }
};
// function showErrorMessage () {
//         console.log("You need put some city.")
//     };