import React from 'react'

export default function About() {
    return (
        <section class="about" id="about">
            <h2 class="info-heading" data-aos="fade-up" data-aos-duration='2000'>&mdash; About Me &mdash;</h2>
            <div class="container">
                <div class="about-box">
                    <img src="/img/mizbah.JPG" alt="Shafiul Azim" class="about-box-photo" data-aos="fade-right" data-aos-duration='2000' />
                    <div class="about-box-details" data-aos="fade-left" data-aos-duration='2000'>
                        <h3 class="heading-normal">What I do ?</h3>
                        <p class="lead">
                            Hey there!I am here for you.I am from Bangladesh.I am a full stack Developer.I make beautiful website for your business as you expect and  I offer you the best service that makes you happy.
                        </p>
                        <a href="#contact" class="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
