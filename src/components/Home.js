import React from 'react';
import Header from './Header'
import AboutSection from './AboutSection';

const Home = () => (
    <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
            <Header />
            <AboutSection />
        </main>
    </div>
)

export default Home;
