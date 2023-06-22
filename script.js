const weatherContainer = document.getElementById("weather-container");

//Function to fetch weather data
function fetchWeatherData() {
  const apiKey = "4a4cfe25b96cd02848b8c26cda238f6";
  const location = "London, UK";
  //Construct the URL with the data provided above
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;

  // Fetch weather data from the API
  fetch(url)
    .then(response => response.json())
    //Extract the temperature and condition from the API response
    .then(data => {
      //Convert the raw Kelvin temperature to Degees (This took an embaressingly long time to figure out)
      const temperature = Math.round(data.main.temp - 273.15);
      const condition = data.weather[0].description;

       //Create a string, add the data pulled from the API into the sentences
      const weatherInfo = `The weather in <strong>${location}</strong><br>
      Is about <strong>${temperature} Degrees</strong><br>
      And has <strong>${condition}</strong>`;
      //Update the weather container element with the weather information
      weatherContainer.innerHTML = weatherInfo;
    })
}

fetchWeatherData();
