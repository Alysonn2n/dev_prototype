import React from 'react';
import  {Route}  from 'react-router-dom';

import authService from '../services/authServices'

import Home from '../pages/home'

const GuestRoute = ({element: Component, ...rest}) => {
    const isAuthenticated = authService.isAuthenticated();
    console.log(isAuthenticated)
    return (
        <Route {...rest} element={(
            isAuthenticated ? <Home/> :
            Component
        )}/>
    )
};

export default GuestRoute