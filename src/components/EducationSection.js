// src/components/EducationSection.js
import React from 'react';
import fast from '../assets/images/fastnu.png'

const EducationSection = () => (
    <section>
        <h2 class="text-secondary fw-bolder mb-4">Education</h2>
        {/* <!-- Education Card 1--> */}
        <div class="card shadow border-0 rounded-4 mb-5">
            <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <a href="https://www.nu.edu.pk/" style={{ textDecoration: 'none' }}>
                            <div className="bg-light p-4 rounded-4 d-flex align-items-center">
                                <img 
                                src={fast} 
                                alt="FAST-NUCES Logo" 
                                style={{ width: '70px', height: '70px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px' }} 
                                />
                                <div>
                                    <div className="text-primary fw-bolder mb-2">2019 - 2023</div>
                                    <div className="mb-2">
                                        <div className="small fw-bolder">FAST-NUCES</div>
                                        <div className="small text-muted">CFD Campus</div>
                                    </div>
                                    <div className="fst-italic">
                                        <div className="small text-muted">Undergraduate</div>
                                        <div className="small text-muted">Computer Science</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-8">
                        <div>
                            Acquired a solid foundation in computer science principles and practical experience in software development.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default EducationSection;