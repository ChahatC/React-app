/*
HTML Structure 

<div class="mt-2 card" >
  <div class="card-body">
    <h5 class="card-title">CITY_NAME_HERE, COUNTRY_CODE_HERE</h5>
    <h6 class="card-subtitle mb-2 text-muted">CURRENT_WEATHER_DEGREES_HERE</h6>
    <p class="card-text">WEATHER_DESCRIPTION_HERE</p>
  </div>
</div>

*/

// renderWeather function
function renderWeather(data, weatherCard) {
  weatherCard=document.querySelector('.weather-container');
  weatherCard.innerHTML= 
    `<div class="mt-2 card" >
      <div class="card-body">
      <h5 class="card-title">${data.name} ,${data.sys.country}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.main.temp } \u00B0C </h6>
      <p class="card-text">${data.weather[0].description}</p>
    </div>
  </div>`;
};
// export the renderWeather function
export {renderWeather} 