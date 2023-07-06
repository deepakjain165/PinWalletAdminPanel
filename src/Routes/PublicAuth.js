import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicAuths = () => {
    const isAuthenticated = () => {
        const user = JSON.parse(localStorage.getItem('userDetails'));
        if(user) return true
        return false
    };
    return isAuthenticated() ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicAuths;