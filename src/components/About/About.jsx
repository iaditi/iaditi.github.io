import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';


const About = () => {
    return (
        <div className='section-container'>
            {/* <h1>I am the about page</h1> */}
            < Header
                heading="Who Am I"
                details="|MBBS|2nd prof|Music Lover|Mad for Cricket|Sleep🧡|"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* subsection 1*/}
                    <h3 className='about-sub-head'>About</h3>
                    <p className='about-details'>
                        I am Aditi Mondal. I am from Narrah, Bankura. Currently I am studying MBBS 2nd prof
                        at ICARE Institute of Medical Science and Research. I have passed my 12th from Narrah
                        High School and 10th from Narrah GK Girls High School.
                        <br />
                        I like to spend time by listening music, watching movies, web series and sleeping.
                    </p>
                    {/* can add more subsections here */}

                </div>
                <div className="about-main-right">
                    {/* added animation */}
                    <img src={aboutAnime}
                        alt="animation"
                        className="about-anime"
                    />

                </div>
            </div>

            < FooterLink
                phrase="Check out my"
                link="projects"
                toAdress="/projects" />

            {/* Vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt="about" />
            </div>

        </div>
    );
}

export default About;