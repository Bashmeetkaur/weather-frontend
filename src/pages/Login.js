import '../styles/login.css';

function Login() {
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:3000/auth/google'; // Backend Google OAuth route
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Welcome to Weather Dashboard</h1>
                <p>Get real-time weather and AQI updates with a single click!</p>
                <button className="google-login-btn" onClick={handleGoogleLogin}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default Login;
