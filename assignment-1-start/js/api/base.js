
import { renderWeather } from "../dom/weather";

// replace your api key 
const API_KEY = "828317c2d3a9c9291edab78335c3e591"
const metric="metric"

// create getWeather function here
function getWeather(cityName) {
    return fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+API_KEY+"&units="+metric+"" )
    .then(response => {
        return response.json()
})
}


// export the getWeather function

export { getWeather };