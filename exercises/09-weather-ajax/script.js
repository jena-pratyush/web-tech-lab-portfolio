const loadWeatherButton = document.getElementById("loadWeather");
const weatherGrid = document.getElementById("weatherGrid");

function renderWeather(data) {
  const cards = data.forecast.map((item) => {
    return `
      <article class="weather-card">
        <span>${item.day}</span>
        <h2>${item.temperature} C</h2>
        <p>${item.condition}</p>
        <dl>
          <div><dt>Humidity</dt><dd>${item.humidity}%</dd></div>
          <div><dt>Wind</dt><dd>${item.wind}</dd></div>
        </dl>
      </article>
    `;
  }).join("");

  weatherGrid.innerHTML = `
    <section class="weather-title">
      <p class="eyebrow">Fetched JSON Data</p>
      <h2>${data.city}, ${data.country}</h2>
      <p>Last updated: ${data.updated}</p>
    </section>
    ${cards}
  `;
}

loadWeatherButton.addEventListener("click", async () => {
  weatherGrid.innerHTML = "<p class=\"status-message\">Loading weather data...</p>";

  try {
    const response = await fetch("weather.json");
    if (!response.ok) {
      throw new Error("Unable to fetch weather data");
    }

    const data = await response.json();
    renderWeather(data);
  } catch (error) {
    weatherGrid.innerHTML = "<p class=\"status-message warning-text\">Weather data could not be loaded. Run this page through a local server if the browser blocks file fetch.</p>";
  }
});
