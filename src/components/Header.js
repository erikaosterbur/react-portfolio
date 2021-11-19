import React from 'react';
import { FaHome, FaUser, FaFolderOpen, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";

const faStyle = { color: "white", padding: "10px", fontSize: "3em" };

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className="px-3 py-2 text-white" id="header">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li style={{fontSize: '20px'}}>
                                <a href="#home" onClick={() => handlePageChange('Home')}
                                    className= {currentPage === 'Home' ? 'nav-link active text-dark' : 'nav-link text-white'}>
                                    <div className= "bi d-block mx-auto mb-1"><FaHome style={faStyle}/></div>
                                    Home
                                </a>
                            </li>
                            <li style={{fontSize: '20px'}}>
                                <a href="#about" onClick={() => handlePageChange('About')}
                                    className= {currentPage === 'About' ? 'nav-link active text-dark' : 'nav-link text-white'}>
                                        <div className="bi d-block mx-auto mb-1"><FaUser style={faStyle}/></div>
                                    About
                                </a>
                            </li>
                            <li style={{fontSize: '20px'}}>
                                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                                    className={currentPage === 'Portfolio' ? 'nav-link active text-dark' : 'nav-link text-white'}>
                                        <div className="bi d-block mx-auto mb-1"><FaFolderOpen style={faStyle}/></div>
                                    Portfolio
                                </a>
                            </li>
                            <li style={{fontSize: '20px'}}>
                                <a href="#resume" onClick={() => handlePageChange('Resume')}
                                    className={currentPage === 'Resume' ? 'nav-link active text-dark' : 'nav-link text-white'}>
                                        <div className="bi d-block mx-auto mb-1"><FaFileAlt style={faStyle}/></div>
                                    Resume
                                </a>
                            </li>
                            <li style={{fontSize: '20px'}}>
                                <a href="#contact" onClick={() => handlePageChange('Contact')}
                                    className={currentPage === 'Contact' ? 'nav-link active text-dark' : 'nav-link text-white'}>
                                        <div className="bi d-block mx-auto mb-1"><FaEnvelopeOpenText style={faStyle}/></div>
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