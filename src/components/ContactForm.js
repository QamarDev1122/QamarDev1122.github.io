// src/components/AboutSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContactForm = () => (
    <section className="py-5">
        <div className="container px-5">
            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                <div className="text-center">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                    <h1 className="fw-bolder">Get in touch</h1>
                    <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                </div>
                <div className="d-flex justify-content-center fs-2 gap-4">
                    <a className="text-gradient" href="mailto:qamarshehzad773@gmail.com" title="Send an email to Qamar Shehzad"><i className="bi bi-envelope"></i></a>
                    <a className="text-gradient" href="https://www.linkedin.com/in/qamar-shehzad-087593190/" title="Connect with me on LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a className="text-gradient" href="https://api.whatsapp.com/send/?phone=923237805481&text&type=phone_number&app_absent=0" title="Follow me on Github"><i className="bi bi-whatsapp"></i></a>
                    <a className="text-gradient" href="https://www.instagram.com/qamarshehzad773/" title="Reach out to me on Instagram"><i className="bi bi-instagram"></i></a>
                    <a className="text-gradient" href="https://www.facebook.com/QamarShahzadmughal90" title="Say Hi to me on Twitter"><i className="bi bi-facebook"></i></a>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}}></textarea>
                                <label for="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>                                    
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            <div className="d-grid">
                                <Link className="btn btn-primary btn-lg" to="/#contect-section">Submit</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default ContactForm