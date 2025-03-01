import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '80px' }}>
                {children}
            </div>
        </>
    );
}

export default Layout;
