// src/components/ProjectsSection.js
import React from 'react';

const ProjectsSection = () => (
    <>
        <section className="py-5">
        <div className="container px-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    <h1 className="display-5 fw-bolder mb-3"><span className="text-gradient d-inline">Machine Learning Based Projects</span></h1>
                    {/* <!-- Project Card 1--> */}
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">DeepCrowd: Crowd Behavioral Analysis and Handling using Deep Learning</h2>
                                    <p>An application that leverages computer vision and deep learning techniques to enable efficient crowd behavioral analysis,
                                        including anomaly detection and crowd density estimation. Crowd analysis can be helpful in resource distribution in
                                        crowd and surveillance of crowd for security and management purposes. </p>
                                </div>
                                <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">Deep Malaria detection</h2>
                                    <p> Deep learning based application for malarial cells detection
                                        A deep learning-based application that detects and classifies malaria
                                        cells in microscopic images of human blood smears. </p>
                                </div>
                                <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    <h1 className="display-5 fw-bolder mb-3"><span className="text-gradient d-inline">SaaS Based Projects</span></h1>
                    {/* <!-- Project Card 1--> */}
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" style={{ height: '400px;'}}>
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">CRMS-Campaign Management System</h2>
                                    <p>A CRM for user campaign management. CRMS can be used for businesses to run their online campaings using one of the most Professional tools like email and WhatsApp. </p>
                                </div>
                                <img 
                                    className="img-fluid" 
                                    src="https://dummyimage.com/300x400/343a40/6c757d" 
                                    // style="max-width: 300px; max-height: 400px; object-fit: cover;" 
                                    alt="Mercuri Admin Portal"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Project Card 2--> */}
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">IPinfo.io</h2>
                                    <p>IP address API: geolocation, VPN detection, company data and more. Serving over 40 billion API requests a month for 500,000+ businesses and developers.</p>
                                </div>
                                <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">instashowing</h2>
                                    <p>The Showing Solution for Forward Thinking Real Estate People
                                        15,000+ agents, teams, brokers and MLSs are up and running with Instashowing
                                    </p>
                                </div>
                                <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" style={{height: '400px;'}}>
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center h-100">
                                <div className="p-5">
                                    <h2 className="fw-bolder">Mercuri Admin Portal</h2>
                                    <p>
                                        Mercuri is an application used for sport enthusiasts to get online trainings from top coaches, practitioners, and trainers.
                                    </p>
                                </div>
                                <img 
                                    className="img-fluid" 
                                    src="https://dummyimage.com/300x400/343a40/6c757d" 
                                    // style="max-width: 300px; max-height: 400px; object-fit: cover;" 
                                    alt="Mercuri Admin Portal"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">DesireDev: A Matrimonial App</h2>
                                    <p>A matrimonial application used for bringing people with similar traits a step closer to each other. 
                                    </p>
                                </div>
                                <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">Zentratoo</h2>
                                    <p>An online market place used to sale daily commmodities in German market.  
                                    </p>
                                </div>
                                <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">Ebazar</h2>
                                    <p>An online market place for selling and purchasing goods.  
                                    </p>
                                </div>
                                <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">Ewagers</h2>
                                    <p>A skill-based Esports wagering platform.  
                                    </p>
                                </div>
                                <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" style={{height: '400px'}}>
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center">
                                <div className="p-5">
                                    <h2 className="fw-bolder">Railway Management System</h2>
                                    <p>An automation of daily operations of Pakistan Railways.
                                    </p>
                                </div>
                                <img 
                                    className="img-fluid" 
                                    src="https://dummyimage.com/300x400/343a40/6c757d" 
                                    // style="max-width: 300px; max-height: 400px; object-fit: cover;" 
                                    alt="Mercuri Admin Portal"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        {/* // <!-- Call to action section--> */}
        <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
            <div className="text-center">
                <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
            </div>
        </div>
        </section>
    </>
)

export default ProjectsSection;
