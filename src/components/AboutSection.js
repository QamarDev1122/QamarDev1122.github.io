// src/components/AboutSection.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import HelloGif from '../assets/images/hello-gif-14.gif';
import UrbanSoleLogo from '../assets/images/urban sole.png';
import JuiGoldLogo from '../assets/images/jui gold.png';
import MOHAGNILogo from '../assets/images/MOHAGNI LOGO.png';

const AboutSection = () => {
    const webProjects = [
        {
            id: 1,
            title: "",
            description: "Created eye-catching designs and videos, managed social media campaigns, and maintained smooth Shopify store operations. Handled photoshoots, edited content, and leveraged data insights to optimize Google Ads and Meta campaigns for better results.",
            images: [MOHAGNILogo],
            tech: ["Adobe Suit", "Canva", "Figma", "Filmora", "Meta", "Shopify"]
        },
        {
            id: 2,
            title: "",
            description: "Designed graphics and catalog books for Jui Gold, a beauty cream brand, enhancing visual appeal and brand identity.",
            images: [JuiGoldLogo],
            tech: ["Adobe Suit", "Adobe Photoshop", "Adobe Illustrator"]
        },
        {
            id: 3,
            title: "",
            description: "Created social media graphic posts and blog post thumbnails for Urban Sole, a footwear brand, boosting online engagement and brand visibility.",
            images: [UrbanSoleLogo],
            tech: ["Adobe Suit", "Adobe Photoshop", "Adobe Illustrator"]
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
                                    Hi I am QamarShehzad
                                </p>
                                <p> 🖌️ Creative Designer | 📱 Social Media Manager | 🛍️ E-Commerce Manager | ✍️ Content Creator   </p>
                                {/* <p className="text-muted">
                            I turn ideas into reality using engineering principles and magic of artificial intelligence. I help businesses to streamline and automate their workflows and earn more money using internet. 
                        </p> */}
                                <p className="text-muted" style={{ textAlignLast: 'center', textAlign: 'justify', textJustify: 'inter-word' }}>
                                    A highly creative and strategic Digital Marketing & E-commerce Manager with over six years of experience in visual content creation, social media campaigns, and Shopify optimization. Proficient in Adobe Photoshop, Adobe Illustrator & Canva in crafting compelling visuals that enhance brand identity and engagement. Adept at leveraging data insights to optimize Google Ads and Meta campaigns, driving maximum engagement and conversions. Skilled in basic WordPress management, enhancing website functionality and user experience. Known for a detail-oriented and deadline-driven individual, with a strong ability to develop and execute innovative marketing strategies that align with brand goals and deliver exceptional results.
                                </p>
                                <h4 className="text-muted">Let's connect 🤝</h4>
                                <div className="d-flex justify-content-center fs-2 gap-4" id='contect-section'>
                                    <a className="text-gradient" href="mailto:qamarshehzad773@gmail.com" title="Send an email to Qamar Shehzad"><i className="bi bi-envelope"></i></a>
                                    <a className="text-gradient" href="https://www.linkedin.com/in/qamar-shehzad-087593190/" title="Connect with me on LinkedIn"><i className="bi bi-linkedin"></i></a>
                                    <a className="text-gradient" href="https://api.whatsapp.com/send/?phone=923237805481&text&type=phone_number&app_absent=0" title="Follow me on Github"><i className="bi bi-whatsapp"></i></a>
                                    <a className="text-gradient" href="https://www.instagram.com/qamarshehzad773/" title="Reach out to me on Instagram"><i className="bi bi-instagram"></i></a>
                                    <a className="text-gradient" href="https://www.facebook.com/QamarShahzadmughal90" title="Say Hi to me on Twitter"><i className="bi bi-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center fs-2 gap-4">
                            <h2 className="display-5 fw-bolder">
                                <span className="text-gradient d-inline">Some glimpses of my work</span>
                            </h2>
                        </div>
                        <div className="row py-3">
                            {webProjects.map((project) => (
                                <div key={project.id} className="col-lg-4 mb-4"
                                >
                                    <div
                                        className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                        style={{ height: '150px' }}
                                    >
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '150px',
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
                                        <div className="card-body p-0" style={{ display: "flex", height: "100%", flexDirection: "column" }}>
                                            <div className="d-flex align-items-start flex-row" style={{ flexGrow: 1 }}>
                                                <div className="p-3" style={{ flex: 1 }}>
                                                    <h5 className="fw-bolder">{project.title}</h5>
                                                    <p>{project.description}</p>
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
                </div>
            </section>
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder">Have any project in mind?</h2>
                        <p>
                            Innovative, creative, and daring - let's craft a project that embodies these qualities and more!
                        </p>
                        <Link className="btn btn-outline-light btn-lg fs-6 fw-bolder" to="/projects"><span>All Projects <i class="bi bi-box-arrow-up-right"></i></span></Link>
                    </div>
                </div>
            </section>
        </>
    )
};

export default AboutSection;