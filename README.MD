React Responsive Navbar Menu

#### Project Setup

1) Create React project using yarn

~~~ bash
yarn create react-app 
~~~

2) Create the following directory/file structure

    <img src = "assets_layout.png" alt = "directory_structure">

3) Add these imports

   - within `base.css` add

   ~~~ scss
   @import './toolbar.scss';
   ~~~

   - within `index.js` add

   ~~~ js
   import './assets/scss/base';
   ~~~

4) Add  <a href = "https://reach.tech/router"> Reach Router</a>

    - install

    ~~~ bash
    yarn add @reach/router
    ~~~

    - add import to `App.js`

    ~~~ js
    import React from 'react';
    import {Router} from '@reach/router'
    ~~~

#### Set up pages and routes

1) Add `navlinks` to `App.js`

    ~~~ js
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
    ~~~

2)     