import React, {useState} from 'react';
import {Link} from '@reach/router';

function ResponseNavigation({navLinks, background, hoverBackground, linkColor, logo}) {
    // Add Hooks to manage hoverIndex
    const [hoverIndex, setHowverIndex] = useState(-1) // default state is -1
    const [navOpen, setNavOpen] = useState(false)

    return(
        <nav
            class = 'responsive-toolbar'
            style = {{ background}}
        > {/* // outside {} is for JSX, inside {} is to return object */}
            <ul 
                style = {{background}}

            >
                {navLinks.map((link) => 
                    <li>
                        <Link
                            to = {link.path}
                            style = {{ color: linkColor}}
                        >
                            {link.text}
                        </Link>    
                    
                    </li>    
                )}
            </ul>
        </nav>
    )


}

export default ResponseNavigation