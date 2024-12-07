import React from 'react';
import Header from './Header'
import AboutSection from './AboutSection';

const Home = () => (
    <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
            <Header />
            <AboutSection />
            {/* Add other sections here */}
        </main>
    </div>
)

export default Home;
