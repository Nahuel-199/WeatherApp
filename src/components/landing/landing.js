import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const landing = () => {
    return (
        <div className="container-landing">
        <h1 className="welcome">Welcome to the</h1>
        <h1 className="wheather">App wheather</h1>
        <Link to='/home' >
            <div className="button">
        <button className="btn btn-1"><p className="ingresar">INGRESAR</p></button>
        </div>
        </Link>
        </div>
    )
}

export default landing;
