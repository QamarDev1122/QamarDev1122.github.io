// src/components/SkillsSection.js
import React from 'react';
import py from '../assets/images/python.svg';
import cpp from '../assets/images/cpp.png';
import html from '../assets/images/html.svg';
import css from '../assets/images/css.svg';
import saas from '../assets/images/sass.svg';
import go from '../assets/images/go.svg';
import node from '../assets/images/node-js.svg';
import sh from '../assets/images/shall.jpeg';
import js from '../assets/images/javascript.svg';
import ts from '../assets/images/typescript.svg';
import sql from '../assets/images/sql.jpeg'

const SkillsSection = () => (
    <section>
        <div class="d-flex align-items-center justify-content-between mb-4">
            <h2 class="text-secondary fw-bolder mb-4">Technical Expertise</h2>
        </div>
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
                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">ML Engineering</div></div>
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
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={py} 
                                alt="Python Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Python</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={js} 
                                alt="JavaScript Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>JavaScript</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={go} 
                                alt="Go Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Go</span>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={html} 
                                alt="HTML Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>HTML</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={css} 
                                alt="CSS Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>CSS</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={saas} 
                                alt="SAAS Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>SAAS</span>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={node} 
                                alt="Node.js Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Node.js</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={ts} 
                                alt="TypeScript Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>TypeScript</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={sh} 
                                alt="Shell Script(Bash) Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Shell Script(Bash)</span>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={cpp} 
                                alt="cpp Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>C++</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={sql} 
                                alt="sql Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>SQL</span>
                            </div>
                        </div>
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