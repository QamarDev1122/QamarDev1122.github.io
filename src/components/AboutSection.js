// src/components/AboutSection.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import HelloGif from '../assets/images/hello-gif-14.gif';
import ResumeSection from './ResumeSection';

import dc from '../assets/images/deepcrowd.png';
import rms from '../assets/images/rms.png';
import de1 from '../assets/images/de1.png';
import de2 from '../assets/images/de2.png';
import model from '../assets/images/model.png';
import uniformity from '../assets/images/uniformity.png';
import rd1 from '../assets/images/rd1.png';
import rd2 from '../assets/images/rd2.png';
import rd3 from '../assets/images/rd3.png';
import rd4 from '../assets/images/rd4.png';
import rd5 from '../assets/images/rd5.png';
import rd6 from '../assets/images/rd6.png';
import crmslogo from '../assets/images/crmslogo.svg';
import crmsIcon from '../assets/images/crms_icon.png';
import dmd from '../assets/images/dmd.png';
import insta from '../assets/images/insta.png';
import insta1 from '../assets/images/insta1.png';
import insta2 from '../assets/images/insta2.png';
import insta3 from '../assets/images/insta3.png';
import insta4 from '../assets/images/insta4.png';
import web from '../assets/images/web.png';
import desire from '../assets/images/desire.png';
import zent from '../assets/images/zentrato.png';
import ip from '../assets/images/ipinfo.png';

const AboutSection = () => {
    const webProjects = [
        {
          id: 1,
          title: "Campaign Management System",
          description: "A CRM for user campaign management. CRMS can be used for businesses to run their online campaings using one of the most Professional tools like email and WhatsApp.",
          images: [crmslogo, crmsIcon , crmsIcon],
          tech: ["Go", "TypeScript", "PostgreSQL", "WhatsApp Business API"]
        },
        {
            id: 2,
            title: "DeepCrowd",
            description: "An application that leverages computer vision and deep learning techniques to enable efficient crowd behavioral analysis, including anomaly detection and crowd density estimation.",
            images: [dc, model, de1, de2, uniformity],
            tech: ["Python", "PyTorch", "OpenCV", "PyQt"]
        },
        {
            id: 3,
            title: "IPinfo.io",
            description: "IP address API: geolocation, VPN detection, company data and more. Serving over 40 billion API requests a month for 500,000+ businesses and developers.",
            images: [ip, rd1, rd2, rd3, rd4, rd5, rd6],
            tech: ["Google BQ", "Google Cloud Plateform", "Python", "Shell", "JavaScript", "Retool"]
          },
    ]

    return (
    <>
    <section className="bg-light">
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
                        <div className="d-flex justify-content-center fs-2 gap-4" id='contect-section'>
                            <a className="text-gradient" href="mailto:ameer.hamza.nu@gmail.com"><i className="bi bi-envelope"></i></a>
                            <a className="text-gradient" href="https://www.linkedin.com/in/contact-ameer-hamza/"><i className="bi bi-linkedin"></i></a>
                            <a className="text-gradient" href="https://github.com/ItzAmeerHamza"><i className="bi bi-github"></i></a>
                            <a className="text-gradient" href="https://www.instagram.com/am33r_ham2a/"><i className="bi bi-instagram"></i></a>
                            <a className="text-gradient" href="https://twitter.com/Am33rHam2a"><i className="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                    {webProjects.map((project) => (
                    <div key={project.id} className="col-lg-4 mb-4" 
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    >
                    <div
                        className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                        style={{ height: '250px' }}
                    >
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center flex-row">
                            <div className="p-3" style={{ flex: 1 }}>
                                <h2 className="fw-bolder">{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div
                                style={{
                                width: '200px',
                                height: '150px',
                                borderRadius: '10%',
                                overflow: 'hidden',
                                marginRight: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#f0f0f0',
                                }}
                            >
                                <img
                                className="img-fluid"
                                src={project.images[0]}
                                alt="DeepCrowd"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'fill',
                                }}
                                />
                            </div>
                            </div>

                            <div className="p-3">
                                {
                                project.tech.map((t) => (
                                    <span className="badge border me-2 primary-border me-2 mb-1">{t}</span>

                                ))
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    ))}
            </div> 
        </div>
    </section>
    </>
)};

export default AboutSection;