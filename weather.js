// OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY_HERE';

// Function to fetch weather data
function fetchWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            updateWeatherDetails(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to update weather details on the page
function updateWeatherDetails(data) {
    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('date').textContent = new Date().toLocaleDateString();
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

// Function to get the user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            fetchWeatherData(position.coords.latitude, position.coords.longitude);
        }, (error) => {
            console.error('Error getting location:', error);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

// Call the function to get the location when the page loads
window.onload = getLocation;
