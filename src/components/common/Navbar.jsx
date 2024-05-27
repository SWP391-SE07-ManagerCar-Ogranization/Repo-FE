import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();
    const location = useLocation();



    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            UserService.logout();
        }
    };

    useEffect(() => {
      }, [location]);
    return (
        <nav>
            <ul>
                {!isAuthenticated && <li><Link to="/">Login</Link></li>}
                {!isAuthenticated && <li><Link to="/register">Register</Link></li>}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    );
}

export default Navbar;
