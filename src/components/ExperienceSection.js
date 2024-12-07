// src/components/ExperienceSection.js
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const ExperienceSection = () => (
    <section>
        <div class="d-flex align-items-center justify-content-between mb-4">
            <h2 class="text-secondary fw-bolder mb-4">Experience</h2>
            <a class="btn btn-primary" target="_blank" href="https://www.dropbox.com/scl/fi/lhsox8trcpfy0sc2e8ofn/ameer_hamza_resume.pdf?rlkey=bwm2dffcjxjfdw1z9dn18ausp&st=p5zym1zs&dl=0">
                <div class="d-inline-block bi bi-download me-2"></div>
                Download Resume
            </a>
        </div>
        {/* <!-- Experience Card 1--> */}
    
        <div class="card shadow border-0 rounded-4 mb-5">
            <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                    <div class="col-lg-12">
                        <div>
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Used Google BQ for analyzing VPN privacy dataset and improved system performance by query optimization.
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Incorporated scripts using Python and Shell Script(Bash) to scrap different VPN extensions and configs to add new IP data points.
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Explored ways to visualize and send a daily report of results against IP churn and IP differences to change the buckets of different providers.
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Developed a GO application for WhatsApp campaign management using WhatsApp Business API. The scope of the application is to be used, for marketing and utility-based campaigns via different messaging templates. Added B2B functionalities for working as a Business Service Provider (BSP) and Tech Provider.
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Experience Card 2--> */}
        <div class="card shadow border-0 rounded-4 mb-5">
            <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                        <div class="bg-light p-4 rounded-4">
                            <div class="text-primary fw-bolder mb-2">2020 -2022</div>
                            <div class="small fw-bolder">Associate Software Engineer</div>
                            <div class="small text-muted">A'sTechware</div>
                            <div class="small text-muted">Lahore Pakistan</div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div>
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Leveraged my skills as an ASE, specializing in Ruby on Rails (RoR) development, to deliver robust and scalable solutions that have successfully met the needs of various projects and clients.
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Full-stack developer - Wrote and reviewed code for rails applications, with expertise in both frontend templating engines (ERB, HAML, Slim) and backend Ruby development.
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default ExperienceSection;