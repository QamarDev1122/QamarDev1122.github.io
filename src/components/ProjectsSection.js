import React, { useState } from "react";
import dc from '../assets/images/deepcrowd.png';
import rms from '../assets/images/rms.png';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
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
    {
      id: 3,
      title: "Web Based Projects",
      description: "A CRM for user campaign management. CRMS can be used for businesses to run their online campaings using one of the most Professional tools like email and WhatsApp.",
      images: [rms, dc],
    },
  ];

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
                {projects.map((project) => (
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
                              {/* Description */}
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
