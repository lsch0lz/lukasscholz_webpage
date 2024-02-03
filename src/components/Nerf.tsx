import React from "react";
import { NavLink } from 'react-router-dom';

const canvasStyle = {
    width: '800px',
    height: '600px',
    margin: 'auto',
};

const Nerf = () => {
    return (
        <div>
            <h1>Nerf Scans:</h1>
            <NavLink to="/bonsai">Bonsai</NavLink>&nbsp;
        </div>
    );
};

export default Nerf;
