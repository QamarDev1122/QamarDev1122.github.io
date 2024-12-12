// src/components/ProjectsSection.js
import React from 'react';
import dc from '../assets/images/deepcrowd.png'

const ProjectsSection = () => (
    <>
        <section className="py-5">
        <div className="container px-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="container">
                    <h1 className="fw-bolder mb-3">
                        <span className="text-gradient d-inline">Machine Learning Based Projects</span>
                    </h1>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        {/* Description */}
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">DeepCrowd</h2>
                                            <p>
                                                An application that leverages computer vision and deep learning
                                                techniques to enable efficient crowd behavioral analysis,
                                                including anomaly detection and crowd density estimation.
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src={dc}
                                        alt="DeepCrowd"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">Python</span>
                                        <span className="badge bg-primary me-2">PyTorch</span>
                                        <span className="badge bg-primary me-2">OpenCV</span>
                                        <span className="badge bg-primary me-2">PyQt</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">Deep Malaria Detection</h2>
                                            <p>
                                                A deep learning-based application that detects and classifies
                                                malaria cells in microscopic images of human blood smears.
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">Python</span>
                                        <span className="badge bg-secondary me-2">OpenCV</span>
                                        <span className="badge bg-success me-2">PyTorch</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">Pedestrian Classification</h2>
                                            <p>
                                                Developed a machine learning algorithm to classify pedestrians into multiple classes using feature fusion and support vector machine.
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">Python</span>
                                        <span className="badge bg-success me-2">OpenCV</span>
                                        <span className="badge bg-secondary me-2">Sklearn</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gx-5 justify-content-center">
                <div className="container">
                    <h1 className="fw-bolder mb-3">
                        <span className="text-gradient d-inline">Web Based Projects</span>
                    </h1>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        {/* Description */}
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">Campaign Management System</h2>
                                            <p>A CRM for user campaign management. CRMS can be used for businesses to run their online campaings using one of the most Professional tools like email and WhatsApp. </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src={dc}
                                        alt="DeepCrowd"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">Go</span>
                                        <span className="badge bg-primary me-2">TypeScript</span>
                                        <span className="badge bg-primary me-2">PostgreSQL</span>
                                        <span className="badge bg-primary me-2">Business Platform</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">IPinfo.io</h2>
                                            <p>IP address API: geolocation, VPN detection, company data and more. Serving over 40 billion API requests a month for 500,000+ businesses and developers.</p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">Google BQ</span>
                                        <span className="badge bg-secondary me-2">Python</span>
                                        <span className="badge bg-success me-2">Shell</span>
                                        <span className="badge bg-success me-2">JavaScript</span>
                                        <span className="badge bg-success me-2">Retool</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">instashowing</h2>
                                            <p>The Showing Solution for Forward Thinking Real Estate People
                                                15,000+ agents, teams, brokers and MLSs are up and running with Instashowing
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">RoR</span>
                                        <span className="badge bg-primary me-2">html/scss</span>
                                        <span className="badge bg-success me-2">PostgreSQL</span>
                                        <span className="badge bg-secondary me-2">Heroku</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">Mercuri Admin Portal</h2>
                                            <p>
                                        Mercuri is an application used for sport enthusiasts to get online trainings from top coaches, practitioners, and trainers.
                                    </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">.Net</span>
                                        <span className="badge bg-success me-2">React/TypeScript</span>
                                        <span className="badge bg-secondary me-2">Swagger</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">DesireDev: A Matrimonial App</h2>
                                            <p>A matrimonial application used for bringing people with similar traits a step closer to each other. 
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">RoR</span>
                                        <span className="badge bg-success me-2">html/scss</span>
                                        <span className="badge bg-secondary me-2">PostgreSQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">Zentratoo</h2>
                                            <p>An online market place used to sale daily commmodities in German market.  
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">RoR</span>
                                        <span className="badge bg-success me-2">html/scss</span>
                                        <span className="badge bg-secondary me-2">PostgreSQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">Ebazar</h2>
                                            <p>An online market place for selling and purchasing goods.  
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">MERN</span>
                                        <span className="badge bg-success me-2">Mongoose</span>
                                        <span className="badge bg-secondary me-2">Github</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">Ewagers</h2>
                                            <p>A skill-based Esports wagering platform.  
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">RoR</span>
                                        <span className="badge bg-success me-2">RSpec</span>
                                        <span className="badge bg-secondary me-2">Github</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div
                                className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                                style={{ height: '250px' }}
                            >
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center flex-row">
                                        <div className="p-3" style={{ flex: 1 }}>
                                            <h2 className="fw-bolder">Railway Management System</h2>
                                            <p>An automation of daily operations of Pakistan Railways.
                                            </p>
                                        </div>
                                        <img
                                        className="img-fluid"
                                        src="https://dummyimage.com/300x400/343a40/6c757d"
                                        alt="Deep Malaria Detection"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'contain',
                                            borderRadius: '15px',
                                            marginRight: '10px',
                                        }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <span className="badge bg-primary me-2">C#</span>
                                        <span className="badge bg-success me-2">SQL</span>
                                        <span className="badge bg-secondary me-2">Github</span>
                                    </div>
                                </div>
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
