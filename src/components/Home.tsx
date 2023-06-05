import React from 'react';
import {Link} from "react-router-dom";


const Home: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <img src={require("../static/profile_picture.jpg")} width={"300"} height={"400"}/>
            <p>LinkedIn: <Link to={"https://www.linkedin.com/in/lukas-scholz-5b3a671a7/"}>Lukas Scholz</Link> </p>
            <p>Github: <Link to={"https://github.com/lsch0lz"}>lsch0lz</Link></p>
            <p>Twitter: <Link to={"https://twitter.com/lscholz_"}>lscholz_</Link></p>
        </div>
    );
}

export default Home;