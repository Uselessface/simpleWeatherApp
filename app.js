const apiKey = 'b785f347427542fabee104208232011';
const form = document.querySelector('form');
const place = document.querySelector('.form__input');
let city;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    city = place.value.trim();
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q= ${city}`;
    getWeather(url);
    form.reset();
})
function getWeather(url) {
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        renderCard(data)
        console.log(data)
    })

}
const weatherCity = document.querySelector('.weather__city');
const weatherIcon = document.querySelector('.weather__img');
const weatherTemp = document.querySelector('.weather__temp');
const wind = document.querySelector('#speed');
const humidity = document.querySelector('#humidity')

function renderCard(data) {
    weatherCity.textContent = data.location.name;
    weatherTemp.textContent = data.current.temp_c + '°C';
    wind.textContent = data.current.wind_kph + 'kp/h';
    humidity.textContent = data.current.humidity + "%";
    weatherIcon.src = data.current.condition.icon;
}
