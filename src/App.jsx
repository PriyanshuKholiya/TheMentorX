import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Partners from './pages/Partners';
import Why from './pages/Why';
import Women from './pages/Women';
import Team from './pages/Team';
import Programs from './pages/Programs';
import Coe from './pages/Coe';
import Events from './pages/Events';
import Research from './pages/Research';
import Careers from './pages/Careers';
import SocialImpact from './pages/SocialImpact';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* 1. Place it here so it triggers on every route change */}
      <ScrollToTop /> 

      <div className="bg-primary min-h-screen text-white font-sans">
        <Navbar />
        
        <main>
          <Routes>
            {/* Core Brand Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/why" element={<Why />} />
            
            {/* People & Initiatives */}
            <Route path="/women" element={<Women />} />
            <Route path="/team" element={<Team />} />
            
            {/* Programs & Offerings */}
            <Route path="/programs" element={<Programs />} />
            <Route path="/coe" element={<Coe />} />
            <Route path="/events" element={<Events />} />
            <Route path="/research" element={<Research />} />
            <Route path="/careers" element={<Careers />} />
            
            {/* Outreach & Contact */}
            <Route path="/social-impact" element={<SocialImpact />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;