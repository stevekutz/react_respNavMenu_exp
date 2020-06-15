import React from 'react';
import {Router} from '@reach/router';
import logo from './logo.svg';
import './App.css';

import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

import ResponsiveNavigation from './components/ResponsiveNavigation';

function App() {
    const navLinks = [
            {   
                text: 'Home',
                path: '/',
                icon: 'ion-ios-home',
            },
            {
                text: 'Contact',
                path: '/contact',
                icon: 'ion-ios-megaphone',
            },
            {
                text: 'About',
                path: '/about',
                icon: 'ion-ios-business'
            },
            {
                text: 'Blog',
                path: '/blog',
                icon: 'ion-ios-bonfire',
            },
            {
                text: 'Portfolio',
                path: '/portfolio',
                icon: 'ion-ios-briefcase',
            }    
    ]
  
  
    return (
        <div className="App">
            <ResponsiveNavigation
                navLinks = {navLinks}
                logo = {logo}
               // background = "#333"
               // hoverBackground = "#ddd"
               // linkColor = "#777"

            />

            <Router>
                <About path = '/about'/>
                <Blog path = '/blog' />
                <Contact path = '/contact' />
                <Home path = '/home' />
                <Portfolio path = '/portfolio'/>
            </Router>
        </div>
  );
}

export default App;
