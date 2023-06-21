const weatherContainer = document.getElementById("weather-container");

// Function to fetch weather data
function fetchWeatherData() {
  const apiKey = "4a4cfe25b96cd02848b8c26cda238f6f";
  const location = "London,uk";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = Math.round(data.main.temp - 273.15);
      const condition = data.weather[0].description;

      const weatherInfo = `Temperature: ${temperature}°C<br>Condition: ${condition}`;
      weatherContainer.innerHTML = weatherInfo;
    })
    .catch(error => {
      console.log("Error fetching weather data:", error);
      weatherContainer.innerHTML = "Failed to fetch weather data.";
    });
}

fetchWeatherData();