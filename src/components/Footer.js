import React from 'react';
import { FaGithub, FaTwitterSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

const faStyle = { color: "white", fontSize: "5em", padding: "10px"};
const footerStyle = { marginTop: "1rem", position: "fixed", bottom: "0", left: "0", width: "100%"};

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }

function Footer() {
    const handleMouseEnter = e => {
        e.target.style.color = "black"
    }
    const handleMouseLeave = e => {
        e.target.style.color = "white"
    }
    return (
        <footer className="footer" style={footerStyle}>
            <div style={phantom}></div>
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

