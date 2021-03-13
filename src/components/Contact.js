import React from 'react'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="info-heading" data-aos="fade-up" data-aos-duration='2000'>&mdash; Contact Me &mdash;</h2>
            <div className="container">
                <div className="contact-box">
                    <div className="contact-box-details" data-aos="fade-right" data-aos-duration='2000'>
                        <img src="/img/contact_us (2).svg" alt="Contact photo" className="contact-box-details-photo" />
                        <h3 className="heading-normal">Get in touch -</h3>
                        <p className="lead">
                            If you have any Question,Sugggestion,Advice or any kind of Feedback feel free to send message.
                        </p>
                        <div className="social-box">
                            <a href="https://www.facebook.com/shafiul.mizbah.1" className="social" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#contact" className="social"><i className="fa fa-twitter-square"></i></a>
                            <a href="#contact" className="social"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <form action="#" className="form" data-aos="fade-left" data-aos-duration='2000'>
                        <input type="text" className="form-input" name="name" placeholder="Name" required />
                        <input type="email" className="form-input" placeholder="Email" required />
                        <textarea name="message" cols="30" rows="5" placeholder="Type you message" className="form-text" required></textarea>
                        <button className="btn btn-secondary">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
