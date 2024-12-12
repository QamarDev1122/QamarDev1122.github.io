import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import ResumeSection from './components/ResumeSection';
import ScrollToSection from '../src/components/Scroll';

function App() {
  return (
    <Router>
      <ScrollToSection />
      <div className="d-flex flex-column h-100">
        <Navbar />
        <main className="flex-shrink-0">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<AboutSection />} /> */}
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/resume" element={<ResumeSection />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
