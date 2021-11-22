import React from 'react';
import { FaHome, FaUser, FaFolderOpen, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { NavDropdown } from 'react-bootstrap';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className="px-3 py-2 text-white" id="header">
                <div className="container row">
                    <div className="col-md-12 col-lg-5 d-flex align-items-center justify-content-center">
                        <a href="#home" onClick={() => handlePageChange('Home')} id="header-name"><h1>Erika Osterbur</h1></a>
                    </div>
                    <div className="d-flex col-md-12 col-lg-7 justify-content-center">
                        <ul className="nav text-small">
                            <li>
                                <a href="#home" 
                                    style={{fontSize: "18px"}}
                                    onClick={() => handlePageChange('Home')}
                                    className= {currentPage === 'Home' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                    <div className= "bi d-flex justify-content-center mx-auto mb-1"><FaHome style={{fontSize: "2.5rem"}} /></div>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" 
                                    style={{fontSize: "18px"}}
                                    onClick={() => handlePageChange('About')}
                                    className= {currentPage === 'About' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                        <div className="bi d-flex justify-content-center mx-auto mb-1 col-5"><FaUser style={{fontSize: "2.5rem"}}/></div>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" 
                                    style={{fontSize: "18px"}}
                                    onClick={() => handlePageChange('Portfolio')}
                                    className={currentPage === 'Portfolio' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                        <div className="bi d-flex justify-content-center mx-auto mb-1"><FaFolderOpen style={{fontSize: "2.5rem"}} /></div>
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#resume"
                                    style={{fontSize: "18px"}}
                                    onClick={() => handlePageChange('Resume')}
                                    className={currentPage === 'Resume' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                        <div className="bi d-flex justify-content-center mx-auto mb-1"><FaFileAlt style={{fontSize: "2.5rem"}} /></div>
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a href="#contact" 
                                    style={{fontSize: "18px"}}
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
            <div id="header-mobile">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center">
                        <a href="#home" id="header-name" onClick={() => handlePageChange('Home')}><h1 className="col-12 d-flex align-items-center">Erika Osterbur</h1></a>
                        <NavDropdown title="Menu" id="basic-nav-dropdown" className="col-12 d-flex justify-content-center">
                                <NavDropdown.Item href="#home" onClick={() => handlePageChange('Home')}><FaHome id="mobile-icon"/>Home</NavDropdown.Item>
                                <NavDropdown.Item href="#about" onClick={() => handlePageChange('About')}><FaUser id="mobile-icon"/>About</NavDropdown.Item>
                                <NavDropdown.Item href="#home" onClick={() => handlePageChange('Portfolio')}><FaFolderOpen id="mobile-icon"/>Portfolio</NavDropdown.Item>
                                <NavDropdown.Item href="#home" onClick={() => handlePageChange('Resume')}><FaFileAlt id="mobile-icon"/>Resume</NavDropdown.Item>
                                <NavDropdown.Item href="#contact" onClick={() => handlePageChange('Contact')}><FaEnvelopeOpenText id="mobile-icon"/>Contact</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </div>
        </header>
        
    )
}
export default Header;