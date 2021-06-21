import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import web from './../../assets/web.png';
import wa from './../../assets/wa.png';
import swaraj from './../../assets/Swaraj.jpeg';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading="Get in touch"
                details="Hey wanna contact me?"


            />

            {/* form section */}
            <div className='contact-form-container'>
                <form
                    action="https://formspree.io/f/mgerybev"
                    method="POST"
                    className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className="social-icons-container">
                <a href="https://github.com/first-phoenix" className="social-icon">
                    <img src={github} alt="social" className="s_icon_img" />
                </a>
                <a href="https://linkedin.com/in/swarajkhan" className="social-icon">
                    <img src={linkedin} alt="social" className="s_icon_img" />
                </a>
                <a href="https://iswaraj.github.io/" className="social-icon">
                    <img src={web} alt="social" className="s_icon_img" />
                </a>
                <a href="https://wa.me/919064297782" className="social-icon">
                    <img src={wa} alt="social" className="s_icon_img" />
                </a>
            </div>

            <div className="my-image">
                <img src={swaraj} alt="Swaraj" className="my-image-img" />

            </div>




            < FooterLink
                phrase="Read more "
                link="About me"
                toAdress="/about"
            />

            <div className="vector-frame">
                <img
                    src={contactVector}
                    alt="contact"
                    className="about-vector"
                />

            </div>





            {/* <h1>I am the Contact page</h1> */}
        </div>
    );
}

export default Contact;