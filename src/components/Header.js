import React from 'react';
import { FaHome, FaUser, FaFolderOpen, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";

const faStyle = { color: "white", padding: "10px", fontSize: "2.75em" };


function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className="px-3 py-2 bg-dark text-white">
            <div className="container">
                <h1>Erika Osterbur</h1>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li style={{fontSize: '25px'}}>
                            <a href="#home" onClick={() => handlePageChange('Home')}
                                className= {currentPage === 'Home' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                <a className="bi d-block mx-auto mb-1"><FaHome style={faStyle}/></a>
                                Home
                            </a>
                        </li>
                        <li style={{fontSize: '25px'}}>
                            <a href="#about" onClick={() => handlePageChange('About')}
                                className= {currentPage === 'About' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                    <a className="bi d-block mx-auto mb-1"><FaUser style={faStyle}/></a>
                                About
                            </a>
                        </li>
                        <li style={{fontSize: '25px'}}>
                            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Portfolio' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                    <a className="bi d-block mx-auto mb-1"><FaFolderOpen style={faStyle}/></a>
                                Portfolio
                            </a>
                        </li>
                        <li style={{fontSize: '25px'}}>
                            <a href="#resume" onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                    <a className="bi d-block mx-auto mb-1"><FaFileAlt style={faStyle}/></a>
                                Resume
                            </a>
                        </li>
                        <li style={{fontSize: '25px'}}>
                            <a href="#contact" onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                    <a className="bi d-block mx-auto mb-1"><FaEnvelopeOpenText style={faStyle}/></a>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </header>
    )
}
export default Header;