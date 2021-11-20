import React from 'react';
import { FaGithub, FaTwitterSquare, FaLinkedin, FaEnvelope, FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
                <a 
                    href="https://github.com/erikaosterbur" 
                    target="_blank" rel="noreferrer">
                        <FaGithub id="footer-icons"/>
                </a>
                <a 
                    href="https://twitter.com/erika_osterbur" 
                    target="_blank" rel="noreferrer">
                        <FaTwitterSquare id="footer-icons"/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/erika-osterbur" 
                    target="_blank" rel="noreferrer">
                        <FaLinkedin id="footer-icons"/>
                </a>
                <a 
                    href="https://www.instagram.com/erika_osterbur/" 
                    target="_blank" rel="noreferrer">
                        <FaInstagramSquare id="footer-icons"/>
                </a>
                <a 
                    href="mailto:erikaosterbur@gmail.com" 
                    target="_blank" rel="noreferrer">
                        <FaEnvelope id="footer-icons"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;


