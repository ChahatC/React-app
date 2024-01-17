// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.


import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeather } from './api/base';
import { renderWeather } from './dom/weather';


document.querySelector("#weather-search").addEventListener('submit', (event)=>
{
    event.preventDefault()
    
    const cityName = event.target.elements["city-name"].value
    getWeather(cityName).then((data)=>{
    renderWeather(data)
    })
})
