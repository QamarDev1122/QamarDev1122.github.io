import React, { useState } from "react";
import { Link } from 'react-router-dom';
  
import dc from '../assets/images/deepcrowd.png';
import rms from '../assets/images/rms.png';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const mlProjects = [
    {
      id: 1,
      title: "DeepCrowd",
      description: "An application that leverages computer vision and deep learning techniques to enable efficient crowd behavioral analysis, including anomaly detection and crowd density estimation.",
      images: [dc, rms],
    },
    {
      id: 2,
      title: "Deep Malaria Detection",
      description: "A deep learning-based application that detects and classifies malaria cells in microscopic images of human blood smears.",
      images: [rms, dc],
    },
    {
      id: 3,
      title: "Pedestrian Classification",
      description: "Developed a machine learning algorithm to classify pedestrians into multiple classes using feature fusion and support vector machine.",
      images: [rms, dc],
    },
  ];

    
  const webProjects = [
    {
      id: 1,
      title: "Campaign Management System",
      description: "A CRM for user campaign management. CRMS can be used for businesses to run their online campaings using one of the most Professional tools like email and WhatsApp.",
      images: [rms, dc],
    },
    {
      id: 2,
      title: "IPinfo.io",
      description: "IP address API: geolocation, VPN detection, company data and more. Serving over 40 billion API requests a month for 500,000+ businesses and developers.",
      images: [rms, dc],
    },
    {
      id: 3,
      title: "instashowing",
      description: "The Showing Solution for Forward Thinking Real Estate People 15,000+ agents, teams, brokers and MLSs are up and running with Instashowing. ",
      images: [rms, dc],
    },
    {
      id: 4,
      title: "Mercuri Admin Portal",
      description: "Mercuri is an application used for sport enthusiasts to get online trainings from top coaches, practitioners, and trainers.",
      images: [rms, dc],
    },
    {
      id: 5,
      title: "DesireDev: A Matrimonial App",
      description: "A matrimonial application used for bringing people with similar traits a step closer to each other.",
      images: [rms, dc],
    },
    {
      id: 6,
      title: "Zentratoo",
      description: "An online market place used to sale daily commmodities in German market.",
      images: [rms, dc],
    },
    {
      id: 7,
      title: "Ebazar",
      description: "An online market place for selling and purchasing goods.",
      images: [rms, dc],
    },
    {
      id: 8,
      title: "Ewagers",
      description: "A skill-based Esports wagering platform.",
      images: [rms, dc],
    },
    {
      id: 9,
      title: "Railway Management System",
      description: "An automation of daily operations of Pakistan Railways.",
      images: [rms, dc],
    },
    
  ]

  return (
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
                {mlProjects.map((project) => (
                  <div key={project.id} className="col-lg-4 mb-4" 
                  data-bs-toggle="modal"
                  data-bs-target="#projectModal"
                  onClick={() => setSelectedProject(project)}
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
                              <span className="badge border me-2 primary-border me-2">Python</span>
                              <span className="badge border me-2 primary-border me-2">PyTorch</span>
                              <span className="badge border me-2 primary-border me-2">OpenCV</span>
                              <span className="badge border me-2 primary-border me-2">PyQt</span>
                          </div>
                      </div>
                  </div>
                  </div>
                ))}
              </div> 
            </div>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="container">
                <h1 className="fw-bolder mb-3">
                    <span className="text-gradient d-inline">Web Based Projects</span>
                </h1>
                <div className="row">
                {webProjects.map((project) => (
                  <div key={project.id} className="col-lg-4 mb-4" 
                  data-bs-toggle="modal"
                  data-bs-target="#projectModal"
                  onClick={() => setSelectedProject(project)}
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
                              <span className="badge border me-2 primary-border me-2">Python</span>
                              <span className="badge border me-2 primary-border me-2">PyTorch</span>
                              <span className="badge border me-2 primary-border me-2">OpenCV</span>
                              <span className="badge border me-2 primary-border me-2">PyQt</span>
                          </div>
                      </div>
                  </div>
                  </div>
                ))}
                </div>
            </div>
          </div>

        </div>
      </section>
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
            <div className="text-center">
                <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">Contact me</Link>
            </div>
        </div>
        </section>

      {selectedProject && (
        <div
          className="modal fade"
          id="projectModal"
          tabIndex="-1"
          aria-labelledby="projectModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="projectModalLabel">
                  {selectedProject.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedProject.description}</p>
                <div className="gallery d-flex flex-wrap">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="img-thumbnail m-2"
                      style={{
                        width: "200px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
