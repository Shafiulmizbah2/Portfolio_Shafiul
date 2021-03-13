import React from 'react'

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <h2 className="info-heading" data-aos="fade-up" data-aos-duration='2000'>&mdash; Experiences &mdash;</h2>
            <div className="container">
            <div className="experience-box">
                <div className="experience-box-details" data-aos="fade-down" data-aos-duration='2000'>
                    <img src="/img/experience_design.svg" alt="Experience photo" className="experience-box-details-photo" />
                    <h3 className="heading-normal">My Experiences -</h3>
                    <p className="lead">
                        I have completed more than <span style={{color: '#de122d' }}>Fourteen Projects</span>  based on HTML , CSS , JavaScript , Bootstrap.For more Details check my work.
                    </p>
                    <a href="#works" className="btn btn-secondary">Check my work</a>
                </div>

                <div className="experience-box-skills" data-aos="fade-up" data-aos-duration='2000'>
                    <h3 className="heading-normal">My Skills -</h3>
                    <div className="skill-box">
                        <p>HTML</p>
                        <p>80%</p>
                    </div>

                    <div className="skill-box">
                        <p>CSS</p>
                        <p>70%</p>
                    </div>

                    <div className="skill-box">
                        <p>JavaScript</p>
                        <p>40%</p>
                    </div>

                    <div className="skill-box">
                        <p>Bootstrap</p>
                        <p>30%</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
