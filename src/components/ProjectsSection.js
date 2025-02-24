import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import UrbanSoleLogo from '../../src/assets/images/urban sole.png';
import JuiGoldLogo from '../../src/assets/images/jui gold.png';

import MOHAGNILogo from '../../src/assets/images/MOHAGNI LOGO.png';
import MOHAGNI1 from '../../src/assets/images/mohagni1.jpeg';
import MOHAGNI2 from '../../src/assets/images/mohagni2.jpeg';
import MOHAGNI3 from '../../src/assets/images/mohagni3.jpeg';
import MOHAGNI4 from '../../src/assets/images/mohagni4.jpeg';
import MOHAGNI5 from '../../src/assets/images/mohagni5.jpeg';
import MOHAGNI6 from '../../src/assets/images/mohagni6.jpeg';
import MOHAGNI7 from '../../src/assets/images/mohagni7.jpeg';
import MOHAGNI8 from '../../src/assets/images/mohagni8.jpeg';
import MOHAGNI9 from '../../src/assets/images/mohagni9.jpeg';
import MOHAGNI10 from '../../src/assets/images/mohagni10.jpeg';
import MOHAGNI11 from '../../src/assets/images/mohagni11.jpeg';
import MOHAGNI12 from '../../src/assets/images/mohagni12.jpeg';

import Jui1 from '../../src/assets/images/jui1.jpeg';
import Jui2 from '../../src/assets/images/jui2.jpeg';
import Jui3 from '../../src/assets/images/jui3.jpeg';
import Jui4 from '../../src/assets/images/jui4.jpeg';
import Jui5 from '../../src/assets/images/jui5.jpeg';
import Jui6 from '../../src/assets/images/jui6.jpeg';
import Jui7 from '../../src/assets/images/jui7.jpeg';
import Jui8 from '../../src/assets/images/jui8.jpeg';

import UrbanSole1 from '../../src/assets/images/urbanSole1.jpeg';
import UrbanSole2 from '../../src/assets/images/urbanSole2.jpeg';
import UrbanSole3 from '../../src/assets/images/urbanSole3.jpeg';
import UrbanSole4 from '../../src/assets/images/urbanSole4.jpeg';
import UrbanSole5 from '../../src/assets/images/urbanSole5.jpeg';
import UrbanSole6 from '../../src/assets/images/urbanSole6.jpeg';


import Prime from '../../src/assets/images/prime.jpeg';
import Prime from '../../src/assets/images/prime.jpeg';
import Prime from '../../src/assets/images/prime.jpeg';
import Prime from '../../src/assets/images/prime.jpeg';
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const toastShown = useRef(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!toastShown.current) {
      toast.info("Check some of my classical work!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        style: {
          backgroundColor: "#3f226c",
          color: "#fff",
          fontSize: "1.0rem",
          fontWeight: "bold"
        },
      });
      toastShown.current = true;
    }
  }, []);

  const webProjects = [
    {
      id: 1,
      title: "",
      description: "Created eye-catching designs and videos, managed social media campaigns, and maintained smooth Shopify store operations. Handled photoshoots, edited content, and leveraged data insights to optimize Google Ads and Meta campaigns for better results.",
      images: [MOHAGNILogo, MOHAGNI1, MOHAGNI2, MOHAGNI3, MOHAGNI4, MOHAGNI5, MOHAGNI6, MOHAGNI7, MOHAGNI8, MOHAGNI9, MOHAGNI10, MOHAGNI11, MOHAGNI12],
      tech: ["Adobe Suit", "Canva", "Figma", "Filmora", "Meta", "Shopify"],
    },
    {
      id: 2,
      title: "",
      description: "Designed graphics and catalog books for Jui Gold, a beauty cream brand, enhancing visual appeal and brand identity.",
      images: [JuiGoldLogo, Jui1, Jui2, Jui3, Jui4, Jui5, Jui6, Jui7, Jui8],
      tech: ["Adobe Suit", "Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: 3,
      title: "",
      description: "Created social media graphic posts and blog post thumbnails for Urban Sole, a footwear brand, boosting online engagement and brand visibility.",
      images: [UrbanSoleLogo, UrbanSole1, UrbanSole2, UrbanSole3, UrbanSole4, UrbanSole5, UrbanSole6],
      tech: ["Adobe Suit", "Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: 4,
      title: "",
      description: "Created social media graphic posts and blog post thumbnails for Urban Sole, a footwear brand, boosting online engagement and brand visibility.",
      images: [Prime, UrbanSole1, UrbanSole2, UrbanSole3, UrbanSole4, UrbanSole5, UrbanSole6],
      tech: ["Adobe Suit", "Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      id: 5,
      title: "",
      description: "Created social media graphic posts and blog post thumbnails for Urban Sole, a footwear brand, boosting online engagement and brand visibility.",
      images: [UrbanSoleLogo, UrbanSole1, UrbanSole2, UrbanSole3, UrbanSole4, UrbanSole5, UrbanSole6],
      tech: ["Adobe Suit", "Adobe Photoshop", "Adobe Illustrator"]
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
              <div className="row">
                {webProjects.map((project) => (
                  <div key={project.id} className="col-lg-4 mb-4"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div
                      className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                      style={{ height: '250px', cursor: "pointer" }}
                    >
                      <div className="card-body p-0" style={{ display: "flex", height: "100%", flexDirection: "column" }}>
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
                        <div className="d-flex align-items-start flex-row" style={{ flexGrow: 1 }}>
                          <div className="p-3" style={{ flex: 1 }}>
                            <h2 className="fw-bolder">{project.title}</h2>
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
          {/* <div className="row gx-5 justify-content-center">
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
                      style={{ height: '250px', cursor: "pointer" }}
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
          </div> */}

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
              <div
                style={{
                  width: '100%',
                  height: '200px',
                }}
              >
                <img
                  className="img-fluid"
                  src={selectedProject.images[0]}
                  alt="DeepCrowd"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="modal-body">
                <p>{selectedProject.description}</p>
                <div className="gallery d-flex flex-wrap">
                  {selectedProject.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="img-thumbnail m-2"
                      style={{
                        width: "160px",
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
