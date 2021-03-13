import React from 'react'

export default function Header() {
    return (
        <header className="header" id="header">

            <div className="video">
                <video className="video-content" autoplay loop muted>
                    <source src="/img/Mock-up.mp4" />
                </video>
            </div>

            <div className="container">
                <div className="header-contant">
                    <div className="header-contant-main">
                        <h1 className="heading" data-aos="fade-down" data-aos-duration='2000'>
                            <div className="heading-sub">Hello , My name is</div>
                            <div className="heading-main">Shafiul Azim</div>
                            <div className="heading-tertiary">And I'm a<span> Web Designer & Developer</span></div>
                        </h1>
                        <a href="#contact" className="btn btn-primary" data-aos="fade-up" data-aos-duration='2000'>HIRE ME</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
