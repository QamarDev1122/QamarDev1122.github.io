// src/components/ResumeSection.js
import React from 'react';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';

const ResumeSection = () => (
    <section class="bg-light py-5">
        <div class="container px-5 my-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Resume</span></h1>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-11 col-xl-9 col-xxl-8">
                    {/* <!-- Experience Section--> */}
                    <ExperienceSection />
                    {/* <!-- Education Section--> */}
                    <EducationSection />
                    {/* <!-- Divider--> */}
                    <div class="pb-5"></div>
                    {/* <!-- Skills Section--> */}
                    <SkillsSection />
                </div>
            </div>
        </div>
    </section>
)

export default ResumeSection;