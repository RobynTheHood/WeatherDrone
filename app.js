const API_KEY = config.API_KEY;
const units = 'imperial';
const zipCode = '98631';
const countryCode = 'us';

const getWeather = async () => {
    try {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${API_KEY}&units=${units}`)
        console.log(res.data);
    } catch (e) {
        return 'An error has occured';
    }

}