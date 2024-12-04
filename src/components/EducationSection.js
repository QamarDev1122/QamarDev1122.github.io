// src/components/EducationSection.js
import React from 'react';

const EducationSection = () => (
    <section>
        <h2 class="text-secondary fw-bolder mb-4">Education</h2>
        {/* <!-- Education Card 1--> */}
        <div class="card shadow border-0 rounded-4 mb-5">
            <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                        <div class="bg-light p-4 rounded-4">
                            <div class="text-secondary fw-bolder mb-2">2019 - 2023</div>
                            <div class="mb-2">
                                <div class="small fw-bolder">FAST-NUCES</div>
                                <div class="small text-muted">CFD Campus</div>
                            </div>
                            <div class="fst-italic">
                                <div class="small text-muted">Undergraduate</div>
                                <div class="small text-muted">Computer Science</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                </div>
            </div>
        </div>
    </section>
)

export default EducationSection;
