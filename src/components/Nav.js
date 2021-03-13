import React from 'react'

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="nav-main">
                        <h3 className="logo">Portfo<span className="logo-span">lio</span></h3>
                        <div className="nav-links">
                            <div className="nav-item">
                                <a href="index.html" className="nav-link">
                                    Home
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#about" className="nav-link">
                                    About Me
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#education" className="nav-link">
                                    Education
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#experience" className="nav-link">
                                    Experience
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#works" className="nav-link">
                                    Works
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#contact" className="nav-link">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
            </nav>

            <nav className="sticky-nav">
                <div className="container">
                    <div className="nav-main">
                        <h3 className="logo">Portfo<span className="logo-span">lio</span></h3>
                        <div className="sticky-nav-main">
                            <input type="checkbox" id="toggle" className="check" />
                            <label for="toggle">
                                <i className="fa fa-bars sticky-nav-btn"></i>
                                <i className="fa fa-times sticky-nav-btn close"></i>
                            </label>
                            <div className="sticky-nav-background">
                                <ul className="sticky-nav-background-list">
                                    <li className="sticky-nav-background-list-item"><a href="index.html" className="sticky-nav-background-list-item-link">Home</a></li>
                                    <li className="sticky-nav-background-list-item"><a href="#about" className="sticky-nav-background-list-item-link">About Me</a></li>
                                    <li className="sticky-nav-background-list-item"><a href="#education" className="sticky-nav-background-list-item-link">Education</a></li>
                                    <li className="sticky-nav-background-list-item"><a href="#experience" className="sticky-nav-background-list-item-link">Experience</a></li>
                                    <li className="sticky-nav-background-list-item"><a href="#works" className="sticky-nav-background-list-item-link">Works</a></li>
                                    <li className="sticky-nav-background-list-item"><a href="#contact" className="sticky-nav-background-list-item-link">Contact Me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        
        </>

    )
}
