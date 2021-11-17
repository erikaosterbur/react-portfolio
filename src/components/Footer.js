import React from 'react';
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const style = { color: "black", fontSize: "5em", padding: "10px" }

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
                    <FaGithub style={style}/>
            </a>
            <a 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                href="https://twitter.com/erika_osterbur" 
                target="_blank" rel="noreferrer">
                    <FaTwitterSquare style={style}/>
            </a>
            <a 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                href="https://www.linkedin.com/in/erika-osterbur" 
                target="_blank" rel="noreferrer">
                    <FaLinkedin style={style}/>
            </a>
          </div>
        </footer>
    )
}

export default Footer;

