import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userName');
        window.location.href = '/';
    };



    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="/weather-app.png" alt="WeatherApp Logo" className="logo-image" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                {userName ? (
                    <>
                        <li className="username">Hello, {userName}!</li>
                        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;


