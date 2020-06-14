import React from 'react';
import {Router} from '@reach/router'
// import logo from './logo.svg';
import './App.css';

function App() {
  const navlinks = [
        {   
            text: 'Home',
            path: '/',
            icon: 'ion-ios-home',
        },
        {
            text: 'Contact',
            path: '/contact',
            icon: 'ion-ios-home',
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

    </div>
  );
}

export default App;
