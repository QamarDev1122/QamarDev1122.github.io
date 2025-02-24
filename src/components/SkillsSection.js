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
import sql from '../assets/images/sql.jpeg';
import bq from '../assets/images/bq.png';
import af from '../assets/images/airflow.png';
import gcp from '../assets/images/gcp.png';
import gin from '../assets/images/gin.jpeg';
import gh from '../assets/images/github.png';
import jq from '../assets/images/jquery.jpeg';
import k from '../assets/images/k8s.png';
import linux from '../assets/images/linux.png';
import mern from '../assets/images/mern.png';
import mongo from '../assets/images/mongo.png';
import mysql from '../assets/images/mysql.jpeg';
import pg from '../assets/images/pg.png';
import pup from '../assets/images/pup.png';
import react from '../assets/images/react.png';
import ror from '../assets/images/ror.png';
import sl from '../assets/images/selenium.png';
import ss from '../assets/images/sqlserver.png';
import code from '../assets/images/code.png';
import wrentch from '../assets/images/code.gif';
import shopify from '../assets/images/shopify.png';
import wp from '../assets/images/wp.png';
import photoshop from '../assets/images/photoshop.png';
import illistrator from '../assets/images/illistrator.png';
import acrobat from '../assets/images/acrobat.png';
import flash from '../assets/images/flash.png';
import filmora from '../assets/images/filmora.png';
import canva from '../assets/images/canva.png';
import premium from '../assets/images/premium.png';
import visio from '../assets/images/visio.png';
import figma from '../assets/images/figma.png';
import indesign from '../assets/images/indesign.png';
import word from '../assets/images/word.png';
import wa from '../assets/images/wa.png';
import meta from '../assets/images/meta.png';
import insta from '../assets/images/insta.png';
import google from '../assets/images/google.png';

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
                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Technical Services</span></h3>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                    src={shopify} 
                                    alt="Python Icon" 
                                    style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Shopify Development</span>
                            </div>
                        </div>
                        <div class="col">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                    src={wp} 
                                    alt="Python Icon" 
                                    style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Wordpress Development</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Languages list--> */}
                <div class="mb-0">
                    <div class="d-flex align-items-center mb-4">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Creative Skills</span></h3>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={photoshop} 
                                alt="Python Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Adobe Photoshop</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={illistrator} 
                                alt="JavaScript Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Adobe Illustrator</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={acrobat} 
                                alt="Go Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Adobe Acrobat</span>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={flash} 
                                alt="HTML Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Adobe Flash</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={filmora} 
                                alt="CSS Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Filmora</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={figma} 
                                alt="SAAS Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Figma</span>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={canva} 
                                alt="Node.js Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Canva</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={visio} 
                                alt="TypeScript Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Visio</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={premium} 
                                alt="Shell Script(Bash) Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Premium Pro</span>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={indesign} 
                                alt="cpp Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Adobe Indesign</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={word} 
                                alt="sql Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Word</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Technologies/Frameworks--> */}
                <div class="mb-0">
                    <div class="d-flex align-items-center mb-4">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-pc-display-horizontal"></i></div>
                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Content Creation</span></h3>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={meta} 
                                alt="sql Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Meta Add</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={insta} 
                                alt="sql Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Instagram</span>
                            </div>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={wa} 
                                alt="sql Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>WhatsApp</span>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                        <div class="col mb-4 mb-md-0">
                            <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                <img 
                                src={google} 
                                alt="sql Icon" 
                                style={{width: '30px', height: '30px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px'}} 
                                />
                                <span>Google Adds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default SkillsSection;