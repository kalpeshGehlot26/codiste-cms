

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
                        <a href="/ai-consulting" onClick={handleLinkClick}>
                        LLM AI Consultation
                        </a>
                    </li>
                    <li>
                        <a href="/ai-consulting" onClick={handleLinkClick}>
                        LLM AI Consultation
                        </a>
                    </li>
                    <li>
                        <a href="/ai-consulting" onClick={handleLinkClick}>
                        LLM AI Consultation
                        </a>
                    </li>
                    <li>
                        <a href="/ai-consulting" onClick={handleLinkClick}>
                        LLM AI Consultation
                        </a>
                    </li>
                    <li>
                        <a href="/ai-consulting" onClick={handleLinkClick}>
                        LLM AI Consultation
                        </a>
                    </li>
                    <li>
                        <a href="/ai-consulting" onClick={handleLinkClick}>
                        LLM AI Consultation
                        </a>
                    </li>
                    <li>
                        <a href="/ai-consulting" onClick={handleLinkClick}>
                        LLM AI Consultation
                        </a>
                    </li>
                    <li>
                        <a href="/ai-consulting" onClick={handleLinkClick}>
                        LLM AI Consultation
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
