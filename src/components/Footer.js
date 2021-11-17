import React from 'react';
import { FaGithub, FaTwitterSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

const faStyle = { color: "black", fontSize: "5em", padding: "10px" };

function Footer() {
    const handleMouseEnter = e => {
        e.target.style.color = "grey"
    }
    const handleMouseLeave = e => {
        e.target.style.color = "black"
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
                href="mailto:erikaosterbur@gmail.com" 
                target="_blank" rel="noreferrer">
                    <FaEnvelope style={faStyle}/>
            </a>
          </div>
        </footer>
    )
}

export default Footer;

