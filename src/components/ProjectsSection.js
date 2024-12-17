import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

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
import desire1 from '../assets/images/desire1.png';
import desire2 from '../assets/images/desire2.png';
import desire3 from '../assets/images/desire3.png';
import zent from '../assets/images/zentrato.png';
import ip from '../assets/images/ipinfo.png';
import mercuriicon from '../assets/images/mercurilogo.png';
import mercuri from '../assets/images/mercuri.png';
import mercuri1 from '../assets/images/mercuri1.png';
import mercuri2 from '../assets/images/mercuri2.png';
import mercuri3 from '../assets/images/mercuri3.png';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    toast.info("Explore some of my classical work here!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }, []);

  const mlProjects = [
    {
      id: 1,
      title: "DeepCrowd",
      description: "An application that leverages computer vision and deep learning techniques to enable efficient crowd behavioral analysis, including anomaly detection and crowd density estimation.",
      images: [dc, model, de1, de2, uniformity],
      tech: ["Python", "PyTorch", "OpenCV", "PyQt"]
    },
    {
      id: 2,
      title: "Deep Malaria Detection",
      description: "A deep learning-based application that detects and classifies malaria cells in microscopic images of human blood smears.",
      images: [dmd],
      tech: ["Python", "PyTorch", "OpenCV"]
    },
    {
      id: 3,
      title: "Pedestrian Classification",
      description: "Developed a machine learning algorithm to classify pedestrians into multiple classes using feature fusion and support vector machine.",
      images: [web],
      tech: ["Python", "OpenCV", "Sklearn"]
    },
  ];
  
  
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
      title: "IPinfo.io",
      description: "IP address API: geolocation, VPN detection, company data and more. Serving over 40 billion API requests a month for 500,000+ businesses and developers.",
      images: [ip, rd1, rd2, rd3, rd4, rd5, rd6],
      tech: ["Google BQ", "Google Cloud Plateform", "Python", "Shell", "JavaScript", "Retool"]
    },
    {
      id: 3,
      title: "instashowing",
      description: "The Showing Solution for Forward Thinking Real Estate People 15,000+ agents, teams, brokers and MLSs are up and running with Instashowing. ",
      images: [insta, insta1, insta2, insta3, insta4],
      tech: ["RoR", "html/scss", "PostgreSQL", "Heroku"]
    },
    {
      id: 4,
      title: "Mercuri Admin Portal",
      description: "Mercuri is an application used for sport enthusiasts to get online trainings from top coaches, practitioners, and trainers.",
      images: [mercuriicon, mercuri, mercuri1, mercuri2, mercuri3],
      tech: [".Net", "React/TypeScript", "Swagger"]
    },
    {
      id: 5,
      title: "DesireDev",
      description: "A matrimonial application used for bringing people with similar traits a step closer to each other.",
      images: [desire, desire1, desire2, desire3],
      tech: ["RoR", "html/scss", "PostgreSQL"]
    },
    {
      id: 6,
      title: "Zentratoo",
      description: "An online market place used to sale daily commmodities in German market.",
      images: [zent],
      tech: ["RoR", "html/scss", "PostgreSQL"]
    },
    {
      id: 7,
      title: "Ebazar",
      description: "An online market place for selling and purchasing goods.",
      images: [web],
      tech: ["MERN", "Mongoose", "Github"]
    },
    {
      id: 8,
      title: "Ewagers",
      description: "A skill-based Esports wagering platform.",
      images: [web],
      tech: ["RoR", "RSpec", "Github"]
    },
    {
      id: 9,
      title: "Railway Management System",
      description: "An automation of daily operations of Pakistan Railways.",
      images: [rms],
      tech: ["C#", "SQL", "SQL"]
    },
    
  ]

  return (
    <>
      <section>
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
                <h2 className="fw-bolder modal-title" id="projectModalLabel">
                  {selectedProject.title}
                </h2>
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
                        width: "300px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
