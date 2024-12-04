// src/components/SkillsSection.js
import React from 'react';

const SkillsSection = () => (
    <section>
        {/* <!-- Skillset Card--> */}
        <div class="card shadow border-0 rounded-4 mb-5">
            <div class="card-body p-5">
                {/* <!-- Professional skills list--> */}
                <div class="mb-5">
                    <div class="d-flex align-items-center mb-4">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Professional Skills</span></h3>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Software Development</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Engineering</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Data Analysis</div></div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">AI Engineering</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Data Engineering</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Interface Design</div></div>
                    </div>
                </div>
                {/* <!-- Languages list--> */}
                <div class="mb-0">
                    <div class="d-flex align-items-center mb-4">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Languages</span></h3>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Go</div></div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML/CSS</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">TypeScript</div></div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Shell Script(Bash)</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">C++</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">SQL</div></div>
                    </div>
                </div>
                {/* <!-- Technologies/Frameworks--> */}
                <div class="mb-0">
                    <div class="d-flex align-items-center mb-4">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-pc-display-horizontal"></i></div>
                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Technologies/Frameworks</span></h3>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Linux</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Git/GitHub</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">React</div></div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">MEARN</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">RoR</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Gin</div></div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">JQuery</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Selenium</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Puppeteer</div></div>
                    </div>
                </div>
                {/* <!-- Databases--> */}
                <div class="mb-0">
                    <div class="d-flex align-items-center mb-4">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
                            <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
                        </svg></div>
                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Databases</span></h3>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Google BQ</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Microsoft SQL Server</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">MySQL</div></div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">PostgreSQL</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">MongoDB</div></div>
                    </div>
                </div>
                {/* <!-- Cloud Platforms and Orchestration --> */}
                <div class="mb-0">
                    <div class="d-flex align-items-center mb-4">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-cloud"></i></div>
                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Cloud Platforms and Orchestration</span></h3>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Google Cloud Platform</div></div>
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Big Query</div></div>
                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Apache Airflow</div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default SkillsSection;
