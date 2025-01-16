//api contra: notengomaterias596
const API_KEY  = "a242f3025c6d9ea68d62c19e7d97e80a";  
const fetchData = position =>{
    console.log(position);
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(response => response.json()).then(data => setWeatherData(data));
}

const setWeatherData = data => {
    const weatherData = {
        location : data.name,
        description : data.weather[0].description,
        humidity : data.main.humidity,
        pressure : data.main.pressure,
        temperature : data.main.temp,
        date : getDay(),
    }
    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];
    });
}

const getDay = () => {
    let date = new Date();
    return `${date.getDate()}/${((date.getMonth()<9) ? '0'+ (date.getMonth()+1) : date.getMonth()+1)}/${date.getFullYear()}`;
}
const onLoad = () =>{
    navigator.geolocation.getCurrentPosition(fetchData);
}