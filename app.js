const API_KEY = config.API_KEY;
let units = 'imperial';
let zipCode = '';
let countryCode = '';

const zipInput = document.querySelector('.zipCode');
const countryInput = document.querySelector('.countryCode');
const submit = document.querySelector('.submit');
const tempText = document.querySelector('.curTempText');

const getWeather = async () => {
    try {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${API_KEY}&units=${units}`)
        tempText.innerText = res.data.main.temp;
    } catch (e) {
        return 'An error has occured';
    }

}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    zipCode = zipInput.value;
    countryCode = countryInput.value;
    getWeather();
})