import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <Navbar />
        <main className="flex-shrink-0">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<AboutSection />} /> */}
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactForm />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
