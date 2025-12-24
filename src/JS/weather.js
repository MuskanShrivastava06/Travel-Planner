const params = new URLSearchParams(window.location.search);
const city = params.get("city"); // Get city from query parameters and store in 'city' variable
const cityName = document.querySelector("#cityName");
const loading = document.querySelector("#loading");
const weatherInfoBox = document.querySelector("#weatherInfo");
const errorBox = document.querySelector("#error");

let API_KEY="fe36d05c88263c7e28dfb2fa21c3179b"

if (!city) {
    loading.classList.add("hidden");
    errorBox.classList.remove("hidden");
} else {
    cityName.textContent = city;

    async function fetchWeather(cityName) {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
        } catch (error) {
            console.log("Fetch error: ", error);
            loading.classList.add("hidden");
            errorBox.classList.remove("hidden");
        }
    }
    fetchWeather(city);
}