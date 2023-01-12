import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import TypeIt from 'typeit-react';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in route: ', location.pathname)

    const navigate = (path) => {
        history(path);
    }

    return (
        <div>
            
            <h1><TypeIt options={{speed: 150, cursor: false}}>HOME PAGE</TypeIt></h1>
            
            <button onClick={() => navigate('/profile')}>
                Go to profile
            </button>
        </div>
    );
}

export default HomePage;
