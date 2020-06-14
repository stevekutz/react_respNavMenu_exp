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
   import './assets/scss/base.scss';
   ~~~

4) Add  <a href = "https://reach.tech/router"> Reach Router</a> & <a href = "https://github.com/sass/node-sass"> node-sass </a>

    - install

    ~~~ bash
    yarn add @reach/router node-sass
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
        const navLinks = [
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

2) Create directory/file structure for pages  

    <img src = "pages_layout.png" alt = "pages layout"/>

3) Add pages (variations of class & functional components are used)

   - `About.js`

   ~~~ js
   import React, {Component} from 'react';

   class About extends Component {

       render() {

           return (
               <div> About </div>

           )
       }

   }

   export default About
   ~~~

   - `Blog`

    ~~~ js
    import React from 'react';

    class Blog extends React.Component {

        render() {

            return (
                <div> Blog page </div>

            )
        }

    }

    export default Blog
    ~~~

   - `Contact`    

   ~~~ js
   import React from 'react';

   export const Contact = () => {

       return (
           <div> Contact page </div>
       )

   }
   ~~~

   - Home 

   ~~~ js
   import React from 'react';

   const Home = () => {

       return (
           <div> Home </div>
       )
   }

   export default Home
   ~~~


   - `Portfolio`

   ~~~ js
   import React from 'react';

   export default function Portfolio() {

       return (
           <div> Portfolio </div>
       )

   }
   ~~~

4) Add imports for pages

    ~~~ js
    import About from './pages/About';
    import Blog from './pages/Blog';
    import Contact from './pages/Contact';
    import Home from './pages/Home';
    import Portfolio from './pages/Portfolio';
    ~~~

5) Run `yarn start` and verify that pages show up when path typed into browser (e.g. http://localhost:3000/home)


#### Build Responsive Navigation