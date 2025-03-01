import { useNavigate } from 'react-router-dom';
import '../styles/prelogin.css';
import { FaCloudSun, FaWind, FaUsersCog } from 'react-icons/fa';

function PreLogin() {
    const navigate = useNavigate();

    return (
        <div className="prelogin-container">
            <div className="overlay"></div>

            {/* Hero Section */}
            <div className="hero fade-in">
                <h1><span>Weather & AQI Tracker</span></h1>
                <p>Real-time weather forecasts and air quality insights, all in one place.</p>
                <button onClick={() => navigate('/login')}>Get Started</button>
            </div>

            {/* Features Section */}
            <section className="features slide-up">
                <h2>Explore Our Features</h2>
                <div className="feature-cards">
                    <div className="card">
                        <FaCloudSun className="icon" />
                        <h3>7-Day Weather Forecast</h3>
                        <p>Accurate and up-to-date weather information.</p>
                    </div>
                    <div className="card">
                        <FaWind className="icon" />
                        <h3>Air Quality Index (AQI)</h3>
                        <p>Track air quality and pollution levels worldwide.</p>
                    </div>
                    <div className="card">
                        <FaUsersCog className="icon" />
                        <h3>Admin Control</h3>
                        <p>Manage user access with ease and efficiency.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose glassmorphism fade-in">
                <h5>Why Choose Us?</h5>
                <p>We deliver fast, reliable, and beautifully presented data, making it easy for you to stay informed.</p>
            </section>
        </div>
    );
}

export default PreLogin;
