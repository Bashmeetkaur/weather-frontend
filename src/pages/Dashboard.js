import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/dashboard.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function Dashboard() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [aqiData, setAqiData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const firstName = params.get('firstName');
        const lastName = params.get('lastName');

        if (firstName && lastName) {
            const fullName = `${firstName} ${lastName}`;
            setUserName(fullName);
            localStorage.setItem('userName', fullName);
            navigate('/dashboard'); // Clean up the URL
        } else {
            const storedName = localStorage.getItem('userName');
            if (storedName) {
                setUserName(storedName);
            } else {
                alert("Please log in to see weather details.");
                navigate('/login'); // Redirect after alert
            }
        }
    }, [location, navigate]);

    const fetchWeatherData = async () => {
        if (!city.trim()) {
            setError('Please enter a city name!');
            return;
        }

        setLoading(true);
        setError('');
        setWeatherData(null);
        setAqiData(null);

        try {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const weatherResponse = await fetch(weatherUrl);
            const weatherData = await weatherResponse.json();

            if (weatherData.cod !== 200) {
                setError('City not found!');
                setLoading(false);
                return;
            }

            const { lat, lon } = weatherData.coord;

            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();

            const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
            const aqiResponse = await fetch(aqiUrl);
            const aqiData = await aqiResponse.json();

            setWeatherData(forecastData);
            setAqiData(aqiData);
        } catch (error) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    return (
        <div className="dashboard">
            <h1 className='user-style'>Welcome, {userName}!  <br/>Weather & AQI Dashboard</h1>
            <h4 className='text-afteruser'>Find Weather & AQI by Entering a City Name</h4>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {weatherData && aqiData && (
                <div className="weather-cards">
                    {weatherData.list.slice(0, 7).map((item, index) => {
                        const date = new Date(item.dt * 1000).toDateString();
                        const aqi = aqiData.list[index]?.main.aqi || 'N/A';

                        return (
                            <div key={index} className="weather-card">
                                <h4>{date}</h4>
                                <p>Temp: {item.main.temp}°C</p>
                                <p>Humidity: {item.main.humidity}%</p>
                                <p>Wind: {item.wind.speed} m/s</p>
                                <p>Pressure: {item.main.pressure} hPa</p>
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                    alt="weather-icon"  
                                />
                                <p>{item.weather[0].description}</p>
                                <p>AQI: {aqi}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Dashboard;