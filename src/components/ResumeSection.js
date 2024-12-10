// src/components/ResumeSection.js
import React from 'react';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';

const ResumeSection = () => (
    <>
        <div class="text-center mb-5">
            <h1 class="display-4 fw-bolder mb-0"><span class="text-gradient d-inline">My Resume</span></h1>
            <p className="text-muted lead fw-light mb-4">
                My incredible journey
            </p>
        </div>
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-11 col-xl-9 col-xxl-8">
                <ExperienceSection />
                <EducationSection />
                <SkillsSection />
            </div>
        </div>
    </>
    
)

export default ResumeSection;