

import React, { useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (

        <div className="dropdown custom-dropdown">
         
            <button className="nav-link dropdown-toggle" onClick={toggleMenu}>
            </button>
            {isOpen && (
                <ul className="dropdown-menu navbar-nav">
                    <li>
                        <a href="/page1" onClick={handleLinkClick}>
                            lofsfsfsfsfsfsfsfsdfsfsfsdfsfsfsfsfsfsfxyz
                        </a>
                    </li>
                    <li>
                        <a href="/page2" onClick={handleLinkClick}>
                            Page 2
                        </a>
                    </li>
                    {/* Add more items as needed */}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
