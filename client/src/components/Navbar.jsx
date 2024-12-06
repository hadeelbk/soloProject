import '../styles/Navbar.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
   // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');
    
    
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token on logout
        //setIsLoggedIn(false); // Update login state
        
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className="navbar">
            <h3>PetAdopt</h3>
            <div className="nav-links">
                {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;