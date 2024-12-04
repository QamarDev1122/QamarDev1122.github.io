import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';


function App() {
  return (


    <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <Navbar />
                <Header />
                <AboutSection />
                {/* Add other sections here */}
            </main>
            <Footer />
    </div>
  );
}

export default App;
