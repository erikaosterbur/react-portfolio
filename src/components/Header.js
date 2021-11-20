import React from 'react';
import { FaHome, FaUser, FaFolderOpen, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className="px-3 py-2 text-white" id="header">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center">
                        <h1 className="col-sm-12 col-lg-5 d-flex align-items-center">Erika Osterbur</h1>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <a href="#home" 
                                    style={{fontSize: "20px"}}
                                    onClick={() => handlePageChange('Home')}
                                    className= {currentPage === 'Home' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                    <div className= "bi d-flex justify-content-center mx-auto mb-1"><FaHome style={{fontSize: "2.5rem"}} /></div>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" 
                                    style={{fontSize: "20px"}}
                                    onClick={() => handlePageChange('About')}
                                    className= {currentPage === 'About' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                        <div className="bi d-flex justify-content-center mx-auto mb-1 col-5"><FaUser style={{fontSize: "2.5rem"}}/></div>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" 
                                    style={{fontSize: "20px"}}
                                    onClick={() => handlePageChange('Portfolio')}
                                    className={currentPage === 'Portfolio' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                        <div className="bi d-flex justify-content-center mx-auto mb-1"><FaFolderOpen style={{fontSize: "2.5rem"}} /></div>
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#resume"
                                    style={{fontSize: "20px"}}
                                    onClick={() => handlePageChange('Resume')}
                                    className={currentPage === 'Resume' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                        <div className="bi d-flex justify-content-center mx-auto mb-1"><FaFileAlt style={{fontSize: "2.5rem"}} /></div>
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a href="#contact" 
                                    style={{fontSize: "20px"}}
                                    onClick={() => handlePageChange('Contact')}
                                    className={currentPage === 'Contact' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                        <div className="bi d-flex justify-content-center mx-auto mb-1"><FaEnvelopeOpenText style={{fontSize: "2.5rem"}} /></div>
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