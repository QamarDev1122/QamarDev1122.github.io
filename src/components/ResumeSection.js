// src/components/ResumeSection.js
import React from 'react';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';

const ResumeSection = () => (
    <div class="row gx-5 justify-content-center">
        <div class="col-lg-11 col-xl-9 col-xxl-8">
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
        </div>
    </div>
)

export default ResumeSection;