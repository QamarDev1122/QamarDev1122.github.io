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
      <div className="row">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card shadow rounded-4 border-0 mb-5"
            data-bs-toggle="modal"
            data-bs-target="#projectModal"
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-body">
              <h2 className="fw-bolder">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

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
