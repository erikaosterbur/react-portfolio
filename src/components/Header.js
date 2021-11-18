import React from 'react';

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
                                Home
                            </a>
                        </li>
                        <li style={{fontSize: '25px'}}>
                            <a href="#about" onClick={() => handlePageChange('About')}
                                className= {currentPage === 'About' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                About
                            </a>
                        </li>
                        <li style={{fontSize: '25px'}}>
                            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Portfolio' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                Portfolio
                            </a>
                        </li>
                        <li style={{fontSize: '25px'}}>
                            <a href="#resume" onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
                                Resume
                            </a>
                        </li>
                        <li style={{fontSize: '25px'}}>
                            <a href="#contact" onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active text-secondary' : 'nav-link text-white'}>
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