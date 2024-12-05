// src/components/AboutSection.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import HelloGif from '../assets/images/hello-gif-14.gif';
import ResumeSection from './ResumeSection';

const AboutSection = () => (
    <>
    <section className="bg-light py-5">
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                    <div className="text-center my-5">
                        <h2 className="display-5 fw-bolder">
                            <span className="text-gradient d-inline">About Me</span>
                        </h2>
                        <p className="mt-5">
                            <img src={HelloGif} alt="Hello GIF" style={{ width: '150px', height: '150px' }} />
                        </p>
                        <p className="text-muted lead fw-light mb-4">
                            I am Ameer Hamza and I help businesses to go online by cutting edge technologies.
                        </p>
                        <p className="text-muted">
                            I turn ideas into reality using engineering principles and magic of artificial intelligence. I help businesses to streamline and automate their workflows and earn more money using internet. 
                        </p>
                        <p className="text-muted">
                            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                        </p>
                        <div className="d-flex justify-content-center fs-2 gap-4">
                        <a class="text-gradient" href="mailto:ameer.hamza.nu@gmail.com"><i className="bi bi-envelope"></i></a>
                            <a className="text-gradient" href="https://www.linkedin.com/in/contact-ameer-hamza/"><i className="bi bi-linkedin"></i></a>
                            <a className="text-gradient" href="https://github.com/ItzAmeerHamza"><i className="bi bi-github"></i></a>
                            <a className="text-gradient" href="https://www.instagram.com/am33r_ham2a/"><i className="bi bi-instagram"></i></a>
                            <a className="text-gradient" href="https://twitter.com/Am33rHam2a"><i className="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ResumeSection />
    </>
);

export default AboutSection;
