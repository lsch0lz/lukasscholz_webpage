import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NavLink to="/">Home</NavLink>&nbsp;
            <NavLink to="/about">About</NavLink>&nbsp;
            <NavLink to="/blog">Blog</NavLink>
        </div>
    );
}

export default Navigation;