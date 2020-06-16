import React, {useState} from 'react';
import {Link} from '@reach/router';

function ResponsiveNavigation({navLinks, background, hoverBackground, linkColor, logo}) {
    // Add Hooks to manage hoverIndex
    const [hoverIndex, setHoverIndex] = useState(-1) // default state is -1
    const [navOpen, setNavOpen] = useState(false)

    return(
        <nav
            className = 'responsive-toolbar'
            style = {{ background}}
        > {/* // outside {} is for JSX, inside {} is to return object */}
            <ul 
                style = {{background}}
                classname = {navOpen ? 'active' : ''}
            >
                <figure className = "image-logo"
                    onClick = { () => {setNavOpen(!navOpen)}}
                >
                    <img src = {logo} height = "40px" width = "40px" alt = "toolbar-logo"/>
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