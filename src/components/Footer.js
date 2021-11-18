import React from 'react';
import { FaGithub, FaTwitterSquare, FaLinkedin, FaEnvelope, FaInstagramSquare } from "react-icons/fa";

const faStyle = { color: "white", fontSize: "5em", padding: "10px"};

function Footer() {
    const handleMouseEnter = e => {
        e.target.style.color = "black"
    }
    const handleMouseLeave = e => {
        e.target.style.color = "white"
    }
    return (
        <footer className="footer">
            <div className="container text-center">
                <a 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    href="https://github.com/erikaosterbur" 
                    target="_blank" rel="noreferrer">
                        <FaGithub style={faStyle}/>
                </a>
                <a 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    href="https://twitter.com/erika_osterbur" 
                    target="_blank" rel="noreferrer">
                        <FaTwitterSquare style={faStyle}/>
                </a>
                <a 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    href="https://www.linkedin.com/in/erika-osterbur" 
                    target="_blank" rel="noreferrer">
                        <FaLinkedin style={faStyle}/>
                </a>
                <a 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    href="https://www.instagram.com/erika_osterbur/" 
                    target="_blank" rel="noreferrer">
                        <FaInstagramSquare style={faStyle}/>
                </a>
                <a 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    href="mailto:erikaosterbur@gmail.com" 
                    target="_blank" rel="noreferrer">
                        <FaEnvelope style={faStyle}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;


