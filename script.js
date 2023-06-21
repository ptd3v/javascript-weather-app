//Use the 'weather-container in the HTMLdocument.
const weatherContainer = document.getElementById("weather-container");

// Function to fetch weather data
function fetchWeatherData() {
  const apiKey = "4a4cfe25b96cd02848b8c26cda238f6f";
  const location = "London,UK";
  const url = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4a4cfe25b96cd02848b8c26cda238f6f';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.current.temp_c;
      const condition = data.current.condition.text;

      const weatherInfo = 'Temperature: ${temperature}°C<br>Condition: ${condition}';
      weatherContainer.innerHTML = weatherInfo;
    })
    .catch(error => {
      console.log("Error fetching weather data:", error);
      weatherContainer.innerHTML = "Failed to fetch weather data.";
    });
}

fetchWeatherData();