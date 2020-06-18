import React, {useState} from 'react';
import {Link} from '@reach/router';
import burger from './burger.png';
// import { AsyncLocalStorage } from 'async_hooks';

function ResponsiveNavigation({navLinks, background, hoverBackground, linkColor, logo}) {
    // Add Hooks to manage hoverIndex
    const [hoverIndex, setHoverIndex] = useState(-1) // default state is -1
    const [navOpen, setNavOpen] = useState(0)

    let img = logo;
    
    {(navOpen && window.innerWidth <= 759  )? img = burger : img = logo}

    return(

    
        <nav
            className = 'responsive-toolbar'
            style = {{ background}}
            onMouseLeave = { () => setNavOpen(0)}
        > {/* // outside {} is for JSX, inside {} is to return object */}

        
            <ul 
                style = {{background}}
                className = {navOpen ? 'active' : ''}
                
            >
                <figure className = "image-logo"
                    onClick = { () => {setNavOpen(!navOpen)}}
                    // onClick = { function() {
                    //     setNavOpen(!navOpen);
                    // }}
                    
                >     
                    <img src = {img} height = "40px" width = "40px" alt = "toolbar-logo"/>
                </figure>

                {navLinks.map((link, index) => 
                    <li
                        onMouseEnter = { () => setHoverIndex(index)}
                        onMouseLeave = { () => setHoverIndex(-1)}
                        
                        style = {{background: hoverIndex === index ? (hoverBackground || '#999') : ''}}
                    >
                        <Link
                            to = {link.path}
                            style = {{ color: linkColor}}
                        >
                            {link.text}
                            <i className = {link.icon}/>
                        </Link>    
                    
                    </li>    
                )}
            </ul>
        </nav>
    )


}

export default ResponsiveNavigation