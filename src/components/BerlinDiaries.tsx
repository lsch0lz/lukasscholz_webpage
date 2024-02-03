import React from 'react';
import {Link} from "react-router-dom";

const BerlinDiaries = () => {
    return (
        <div>
            <h1>Berlin Diaries</h1>
            <Link to={"/berlin-diaries/31012024"}>31.01.20204</Link>
        </div>
    );
}

export default BerlinDiaries;