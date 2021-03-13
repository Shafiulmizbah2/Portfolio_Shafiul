import React from 'react'

export default function Education() {
    return (
        <section className="education" id="education">
            <h2 className="info-heading" data-aos="fade-up" data-aos-duration='2000'>&mdash; Education &mdash;</h2>
            <div className="container">
                <div className="education-box">
                    <div className="education-box-details" data-aos="fade-right" data-aos-duration='2000'>
                        <h3 className="heading-normal">Where I read ?</h3>
                        <p className="lead-2">
                            I am a student and I am  completing B.Sc in Computer Science and Engineering from International Islamic University,Chittagong.For additional information download my CV.
                        </p>
                        <a href="/img/Mizbah_CV.pdf" className="btn btn-secondary" download>Download CV</a>
                    </div>
        
                    <img src="/img/graduation.svg" alt="graduation" className="education-box-photo" data-aos="fade-left" data-aos-duration='2000' />
                </div>
            </div>
        </section>
    )
}
