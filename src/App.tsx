import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Blog from "./components/Blog";
import Nerf from "./components/Nerf";
import Bonsai from "./components/Bonsai";
import styles from "./App.module.scss";


class App extends Component {
  render() {
    // @ts-ignore
    return (
        <Router>
          <div className={styles.myApp}>
            <Navigation />
            <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/about" Component={About}/>
                <Route path="/blog" Component={Blog}/>
                <Route path="/nerf" Component={Nerf}/>
                <Route path="/bonsai" Component={Bonsai}/>
              <Route Component={Error}/>
            </Routes>
          </div>
        </Router>
    );
  }
}

export default App;