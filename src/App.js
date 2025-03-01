// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import VideoBackground from './components/VideoBackground';
// import PreLogin from './pages/PreLogin';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import AdminPanel from './pages/AdminPanel';

// function App() {
//     return (
//         <>
//             <VideoBackground />
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<PreLogin />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/admin" element={<AdminPanel />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoBackground from './components/VideoBackground';
import Layout from './components/Layout';
import PreLogin from './pages/PreLogin';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import AdminPanel from './pages/AdminPanel';
// import CitySearch from './pages/CitySearch';

function App() {
    return (
        <BrowserRouter>
            <Layout> {/* Navbar will always be here */}
                <Routes>
                    {/* Pre-login pages with video background */}
                    <Route
                        path="/"
                        element={
                            <>
                                <VideoBackground />
                                <PreLogin />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                <VideoBackground />
                                <Login />
                            </>
                        }
                    />

                    {/* Post-login pages */}
                    {/* isko abhi krenge bcz once login functionality hojye uske baad navbar tbhi show kryenge  */}
                    <Route path="/dashboard"    element={
                            <>
                                <VideoBackground />
                                <Dashboard />
                            </>
                        } />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
