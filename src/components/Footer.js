import React from 'react';
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const style = { color: "black", fontSize: "5em", padding: "10px" }

function Footer() {
    return (
        <footer className="footer">
          <div className="container text-center">
            <a href="https://github.com/erikaosterbur" target="_blank" rel="noreferrer"><FaGithub style={style}/></a>
            <a href="https://twitter.com/erika_osterbur" target="_blank" rel="noreferrer"><FaTwitterSquare style={style}/></a>
            <a href="https://www.linkedin.com/in/erika-osterbur" target="_blank" rel="noreferrer"><FaLinkedin style={style}/></a>
          </div>
        </footer>
    )
}

export default Footer;

